import { useEffect, useState } from "react";

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authError, setAuthError] = useState(false);

    useEffect(() => {
        try {
            const token = data.token;

            localStorage.setItem("token") 

            const storedToken = localStorage.getItem("token");
            const storedUser = localStorage.getItem("user");

            if (storedToken) {
                console.log("Token found in localStorage:", storedToken);
                setToken(storedToken);
                setIsAuthenticated(true);
            } else {
                console.warn("No token found in localStorage.");
                setIsAuthenticated(false);
            }

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }

        } catch (error) {
            console.error("Error in useAuth hook: ", error);
            setAuthError(true);
        }
    }, []);

    // Function to manually refresh token state if needed
    const refreshAuth = () => {
        const newToken = localStorage.getItem("token");
        const newUser = localStorage.getItem("user");

        setToken(newToken);
        setUser(newUser ? JSON.parse(newUser) : null);
        setIsAuthenticated(!!newToken);
    };

    return { user, token, isAuthenticated, authError, refreshAuth };
}




// import { useEffect, useState } from "react";

// export default function useAuth() {
//     const [user, setUser] = useState();
//     const [token, setToken] = useState();
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [authError, setAuthError] = useState(false);

// useEffect(() => {
//     try {
//         const storedToken = localStorage.getItem("token");
//         const storedUser = localStorage.getItem("user");

//     if (storedToken) {
//         setToken(storedToken);
//         setIsAuthenticated(true);
//     } else {
//         setIsAuthenticated(false);
//     }

//     if (storedUser) {
//         setUser(JSON.parse(storedUser));
//         setIsAuthenticated(true);
//         }
//     } catch (error) {
//         console.error("Error in useAuth hook: ", error);
//         setAuthError(true);
//     }
//     }, []);

// //     const clearAuth = () => {
// //    // localStorage.removeItem("token");
// //    // localStorage.removeItem("user");
// //     setUser(null);
// //     setToken(null);
// //     setIsAuthenticated(true);
// //     };

//     return { user, token, isAuthenticated, authError };
// }

// import { useState, useEffect } from 'react';

// export default function useAuth() {
//     const [user, setUser] = useState();
//     const [token, setToken]= useState();
//     const [isAuthenticated, setIsAuthenticated] = useState( false );

//     useEffect(() => {
//         const t = localStorage.getItem("token");
//         setToken(t);
//         const u = localStorage.getItem("user");
//         if(u) {
//             setUser(JSON.parse(u));
//         }
//         if(t) {
//             setIsAuthenticated(true);
//         }
//     }, [] );
    

//     return { user, token, isAuthenticated }

// }