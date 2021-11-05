import React, { useEffect, useState } from 'react'
import axios from 'axios';

function useBookSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setBooks([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'http://localhost:4001/api/products/all',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(ress => {

            setBooks(prevBooks => {
                return [...new Set([...prevBooks, ...ress.data.docs.map(b => b.title)])]
            })
            setHasMore(ress.data.docs.length > 0)
            setLoading(false)
            console.log(ress.data);
        }).catch(err => {
            if (axios.isCancel(err)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber])

    return { loading, error, books, hasMore }
}

export default useBookSearch
