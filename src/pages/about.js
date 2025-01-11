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
        <NavBar menuItems={["HOME", "ABOUT", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
        <div style={divStyle}>
        <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
        </div>
        <div className="justify-self-center ml-auto mr-auto max-w-5xl text-yellow-200 text-med font-mono items-center round opacity-90 px-auto mt-25 text-wrap bg-black p-4 rounded shadow-lg mt-4">
        <div className="card">
            <p>About content.
            </p>
            </div>
        </div>
        </>
    )
}