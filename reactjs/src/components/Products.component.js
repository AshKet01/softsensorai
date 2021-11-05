
import React, { useState, useRef, useCallback } from 'react';
import Card from './Card.component';
import useBookSearch from '../hooks/useBookSearch';

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
                        return <div ref={lastBookElementRef}><Card /></div>
                    } else {
                        return <div><Card /></div>
                    }
                })}
                <div>{loading && "Loading..."}</div>
                <div>{error && "Error..."}</div>
            </div>
        </>
    )
}

export default Products
