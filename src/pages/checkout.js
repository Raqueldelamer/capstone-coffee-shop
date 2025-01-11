import Navbar from "@/components/Navbar";
import Button from "@/components/Button";


export default function CheckoutPage () {

    function handleCheckout() {
        alert('Submit Clicked!');
    }

    return (
        <div>
            <Navbar menuItems={["HOME", "ABOUT", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
            <h1 className="form text-yellow-500 mt-5 text-center font-sans text-4xl space-x-6 justify-around">Check Out Page</h1>
            <form onSubmit={handleCheckout} className="flex flex-col space-y-4 mx-auto">
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="" id="name" />
                
                <label htmlFor="address">Address:</label>
                <input type="text" placeholder="" id="address" />

                <label htmlFor="city">City:</label>
                <input type="text" placeholder="" id="city" />

                <label htmlFor="zipcode">Zip Code:</label>
                <input type="text" placeholder="" id="zipcode" />

                <Button label="Submit" />


            </form>
        </div>
    )
}