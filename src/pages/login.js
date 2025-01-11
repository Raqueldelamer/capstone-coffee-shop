import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/Navbar";

export default function Home() {


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
    <NavBar menuItems={["HOME", "ABOUT", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
    <div style={divStyle}>
    <h1 className="text-black text-5xl bg-slate-400 opacity-70 drop-shadow-2xl mb-5 mt-10 mx-auto font-mono font-bold 
    text-stroke-thick flex justify-around items-center w-full">LOGIN BELOW!</h1>
    <LoginForm />
    </div>
    </>
    )
}