import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export default function CheckoutPage () {

    function handleCheckout() {
        alert('Submit Clicked!');
    }

    return (
        <div>
            <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
            <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
            <div className="px-20">
            <h1 className="form text-yellow-500 mt-5 text-center font-mono text-4xl space-x-6 justify-around">Check Out Page</h1>
            <form onSubmit={handleCheckout} className="flex flex-col mx-auto">
                <label htmlFor="name">Name:</label>
                <input type="text" className="space-x-20" placeholder="" id="name" />
                
                <label htmlFor="address">Address:</label>
                <input type="text" placeholder="" id="address" />

                <label htmlFor="city">City:</label>
                <input type="text" placeholder="" id="city" />

                <label htmlFor="zipcode">Zip Code:</label>
                <input type="text" placeholder="" id="zipcode" />
                

                <Button label="Submit" className="btn btn-primary border border-black text-black font-bold py-2 px-4 rounded" />
            </form>
            </div>
            
        </div>
    )
}