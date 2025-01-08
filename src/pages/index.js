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
  <Header headerText={"COFFEE OR TEA, SNACK & READ!"}/>
  <TestButton label="Sign Up" handleClick={handleCtaClick}/>
  </div>
  </>
  )
}