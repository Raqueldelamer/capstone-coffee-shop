import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    function login() {
        alert("You are logged in!")
        router.push('/products');
    }

    const loginUser = (username, password) => console.log("User Logged In!");


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
    <NavBar menuItems={["HOME", "LOGIN"]} />
    <div style={divStyle}>
    <h1 className="text-black text-5xl bg-slate-400 opacity-70 drop-shadow-2xl mb-5 mx-auto font-mono font-bold 
    text-stroke-thick flex justify-around items-center w-full">LOGIN BELOW!</h1>
    <LoginForm title="Login" handleLogin={login}/>
    </div>
    </>
    )
}