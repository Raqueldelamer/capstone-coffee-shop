import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useState } from 'react';
import { useFetch } from "@/hooks/api";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const loginURL = `${BACKEND_URL}/users/login`;

export default function Login() {
    const router = useRouter();
    const [error, setError] = useState('');
    
    // Handle login
    async function handleLogin(email, password) {
        const payload = {
            email,
            password,
        };
                                //https://coffee-shop-backend-5fmn.onrender.com/api/v2/users/login
                            
        try {
            const response = await fetch(loginURL, {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: { "Content-Type": "application/json; charset=UTF-8", },
                }
            );
                
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                alert('You are logged in: ' + email); 
                router.push('/products'); 
            } else {
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert('An error occurred while logging in.');
        }
    }

    const divStyle = {
        backgroundImage: 'url(/imgs/book-cafe.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'brown',
        height: '100vh',
        color: 'black',
    };

    return (
        <>  
            <NavBar menuItems={["HOME", "LOGIN"]} />
            <div style={divStyle}>
                <h1 className="text-black text-5xl bg-slate-400 opacity-70 drop-shadow-2xl mb-5 mx-auto font-mono font-bold 
                text-stroke-thick flex justify-around items-center w-full">LOGIN BELOW!</h1>
                <LoginForm handleLogin={handleLogin} />
            </div>
            <Footer className="flex justify-items-end" />
        </>
    );
}