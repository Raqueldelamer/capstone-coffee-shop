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
//     })
    

//     return { user, token  }

// }