
import React, { useState, useRef, useCallback } from 'react';
import Card from './Card.component';
import useBookSearch from './hooks/useBookSearch';

function Products() {

    // const [query, setQuery] = useState('')
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

    // function handleSearch(e) {
    //   setQuery(e.target.value);
    //   setPageNumber(1)
    // }

    console.log(products);


    return (
        <>
            {/* <input value={query} type="text" onChange={handleSearch} /> */}
            <div className="card-deck">
                {products.map((product, index) => {
                    if (products.length === index + 1) {
                        return <div ref={lastBookElementRef}><Card /></div>
                        // return <div style={{ margin: "100px 20px" }} ref={lastBookElementRef} key={product.id}>{product.title}</div>
                    } else {
                        return <div><Card /></div>
                        // return <div style={{ margin: "100px 20px" }} key={product.id}>{product.title}</div>
                    }
                })}
                <div>{loading && "Loading..."}</div>
                <div>{error && "Error..."}</div>
            </div>
        </>
    )
}

export default Products
