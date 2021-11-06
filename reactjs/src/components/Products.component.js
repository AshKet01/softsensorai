
import React, { useState, useRef, useCallback } from 'react';
import Card from './Card.component';
import useBookSearch from '../hooks/useBookSearch';
import Spinner1 from './common/Spinner1';

function Products() {
    const [pageNumber, setPageNumber] = useState(1);
    const { loading, error, products, hasMore } = useBookSearch(pageNumber)

    const observer = useRef();
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <>
            <div className="card-deck">
                {products.map((product, index) => {
                    if (products.length === index + 1) {
                        return <div key={product.id} ref={lastBookElementRef}><Card product={product} /></div>
                    } else {
                        return <div key={product.id}><Card product={product} /></div>
                    }
                })}

                <div className="product-card" >
                    <div>{loading && <Spinner1 />}</div>
                </div >
                {/* <div>{error && "Error..."}</div> */}
            </div>
        </>
    )
}

export default Products
