import SignupForm from "@/components/SignUpForm";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useState } from 'react';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
//const registerURL = `${BACKEND_URL}/users/register`;

export default function Signup() {
    const router = useRouter();
    const [error, setError] = useState('');

    async function handleSignup(user) {
    router.push('/login');
    alert('Thank you for Signing Up ' + user.email);

    // Add the user role 
    //user.role = 'admin';

    // Make the POST request to register the user
    const response = await fetch("https://coffee-shop-backend-3ovb.onrender.com/api/v2/users/register", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'Content-type': 'application/json; charset=UTF-8', },
    });

    const data = await response.json();
    if (data.message) {
        // Handle errors during signup
        setError(data.message);
        } else {
        // Redirect to the login page if signup is successful
        //router.push('/login');
        }
    }

    const divStyle = {
        backgroundImage: 'url(/imgs/book-cafe.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'black',
        height: '100vh',
        color: 'black',
    };

    return (
    <>  
    <NavBar menuItems={["HOME", "LOGIN",]} />
        <div style={divStyle}>
        <h1 className="text-black text-5xl bg-slate-400 opacity-70 drop-shadow-2xl mb-5 mx-auto font-mono font-bold 
        text-stroke-thick flex justify-around items-center w-full">SIGN UP BELOW!</h1>
            
            {error && (
                    <div className="text-red-400">
                        Error signing up: {error}
                    </div>
                )}
    <SignupForm title="signup" handleSignUp={handleSignup} />
    </div>
    <Footer className="flex justify-items-end" />
    </>
    )
}