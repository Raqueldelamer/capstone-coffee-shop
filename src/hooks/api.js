// import { useState, useEffect } from "react";

// export function useFetch(url, initialState) {
//     const [data, setData] = useState(initialState);
//     const [fetchError, setFetchError] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//             setLoading(true);
//         const response = await fetch(url);
//             if (!response.ok) {
//             console.log("fetch failed with " + response.status);
//             setFetchError(true);
//         }
//         else {
//             const productData = await response.json();
//             setData(productData);
//         }
//         } catch (error) {
//         console.log(error);
//         setFetchError(true);
//         } finally {
//         setLoading(false);
//         }
//     }

//     fetchData();
// }, [ url ]);

//     return [fetchError, loading, data];
// }

import { useState, useEffect } from 'react';


export function useAuthFetch(url, initialState, token) {
    const [data, setData] = useState(initialState);
    const [fetchError, setFetchError] = useState(null);  
    const [loading, setLoading] = useState(true);
    // const [token, setToken] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(!token) {
                    console.log("no token provided");
                    return;
                }
                setLoading(true);
                const response = await fetch(url, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                //setLoading(true);
                //const response = await fetch(url);

                if (!response.ok) {
                    // error message if fetch fails
                    throw new Error(`Fetch failed`);
                }

                const productData = await response.json();
                setData(productData);
                setFetchError(null);  

            } catch (error) {
                console.error('Error fetching data:', error);
                setFetchError(error.message);  
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, token]);

    return { data, loading, fetchError };
}