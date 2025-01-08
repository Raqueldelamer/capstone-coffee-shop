import NavBar from "@/components/Navbar";
import TestButton from "@/components/TestButton";
import Header from "@/components/Header";
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();
  function handleCtaClick() {
    console.log('CTA button clicked!');
    router.push('/sign-up');
  }
  
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
  <NavBar />
  <div style={divStyle}>
    <Header />
  <h1 className="text-white font-mono py-2 px-40 text-center text-bold justify-stretch">COFFEE OR TEA, SNACK & READ!</h1>
  <TestButton label="Sign Up" handleClick={handleCtaClick}/>
  </div>
  </>
  )
}