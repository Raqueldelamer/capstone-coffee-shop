import SignupForm from "@/components/SignUpForm";
import Navbar from "@/components/Navbar";

export default function Home() {


    const divStyle = {
        backgroundImage: 'url(/imgs/used-book-cafe-scaled.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'black',
        height: '100vh',
        color: 'black',
    };


    return (
    <>  
    <Navbar />
    <div style={divStyle}>
    <h1 className="text-yellow-200 drop-shadow-xl text-5xl text-center font-bold justify-stretch">SIGN UP BELOW!</h1>
    <SignupForm />
    </div>
    </>
    )
}