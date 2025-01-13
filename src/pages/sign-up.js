import SignupForm from "@/components/SignUpForm";
import NavBar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function Signup() {
    const router = useRouter();
    
    function signUp() {
    alert("Thank you for Signing Up!");
    router.push('/login');
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
    <NavBar menuItems={["HOME", "CART", "CHECKOUT"]} />
    <div style={divStyle}>
    <h1 className="text-black text-5xl bg-slate-400 opacity-70 drop-shadow-2xl mb-5 mt-10 mx-auto font-mono font-bold 
    text-stroke-thick flex justify-around items-center w-full">SIGN UP BELOW!</h1>
    <SignupForm title="signup" handleSignUp={signUp} />
    </div>
    </>
    )
}