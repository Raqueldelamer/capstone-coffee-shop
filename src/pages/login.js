import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();

    // Handle login
    async function handleLogin(email, password) {
        const payload = {
            email,
            password,
        };
                            // https://coffee-shop-backend-3ovb.onrender.com/api/v1/products
        try {
            const response = await fetch("https://coffee-shop-backend-5fmn.onrender.com/api/v2/users/login", 
                {   method: "POST",
                    body: JSON.stringify(payload),
                    headers: { "Content-Type": "application/json; charset=UTF-8", },
                }
            );

            const data = await response.json();

            // store it in localStorage if returned a token
            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user)); 
                alert('You are logged in: ' + email); 
                router.push('/products'); 
            } else {
                alert('Login failed!');
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