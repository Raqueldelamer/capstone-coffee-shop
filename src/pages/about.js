import NavBar from "@/components/Navbar";
import Header from "@/components/Header";


export default function About() {


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
        <NavBar menuItems={["HOME", "ABOUT", "LOGIN", "PRODUCTS", "CART"]} />
        <div style={divStyle}>
        <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
        </div>
        </>
    )
}