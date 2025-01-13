import NavBar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";

const divStyle = {
    backgroundImage: 'url(/imgs/book-cafe.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'transparent',
    height: '100vh',
    color: 'black',
};

export default function AboutPage() {


    return (
        <>
        <NavBar menuItems={["HOME", "LOGIN", "CART", "CHECKOUT"]} />
        <div style={divStyle} >
        <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
        <About title= {"ABOUT"} />
        </div>
        </>
    );
}