import SignupForm from "@/components/SignUpForm";
import Navbar from "@/components/Navbar";

export default function Home() {



    return (
    <>  
    <Navbar />

    <h1 className="text-white text-center text-bold justify-stretch">COFFEE OR TEA, SNACK & READ!</h1>
    <SignupForm />
    </>
    )
}