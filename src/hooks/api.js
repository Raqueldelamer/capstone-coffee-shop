import { useState, useEffect } from "react";

// useFetch for unauthorized users
export function useFetch(url, initialState) {
    const [data, setData] = useState(initialState);
    const [fetchError, setFetchError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Fetch failed');
                }
                const productData = await response.json();
                setData(productData);
                setFetchError(null);
            } catch (error) {
                console.log('Error fetching data:', error);
                setFetchError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);
    return [fetchError, loading, data];
}


// useAuthFetch for authorized users (with token)
export function useAuthFetch(url, initialState, token) {
    const [data, setData] = useState(initialState);
    const [fetchError, setFetchError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url, {
                    method: 'GET',  // Can change this method 
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Fetch failed');
                }

                const dataFromApi = await response.json();
                setData(dataFromApi);
                setFetchError(null);
            } catch (error) {
                console.log('Error fetching data:', error);
                setFetchError(true);
                
            } finally {
                setLoading(false);
            }
        }

        if (token) {  // fetch if the token exists
            fetchData();
        }
    }, [url, token]);
    console.log(token);

    return { data, fetchError, loading };
}