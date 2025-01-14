
import Button from "./Button";

export default function CheckoutPage ({ handleCheckout }) {

    function handleCheckout(event) {
        alert('Checkout Clicked!');

        event.preventDefault();
        const name= event.target.elements.name.value;
        const address= event.target.elements.address.value;
        const city= event.target.elements.city.value;
        const zipcode= event.target.elements.zipcode.value;
        
        handleCheckout(name, address, city, zipcode );

        
    }

    return (
        <div>
        
            <h1 className="form text-yellow-500 mt-5 text-center font-sans text-4xl space-x-6 justify-around">Check Out Page</h1>
            <form onSubmit={handleCheckout} className="flex flex-col space-y-4 mx-auto">
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="" id="name" name="name" />
                
                <label htmlFor="address">Address:</label>
                <input type="text" placeholder="" id="address" name="address" />

                <label htmlFor="city">City:</label>
                <input type="text" placeholder="" id="city" name="city" />

                <label htmlFor="zipcode">Zip Code:</label>
                <input type="text" placeholder="" id="zipcode" name="zipcode" />

                <Button label="Submit"className="btn btn-primary border border-black text-black font-bold py-2 px-4 rounded" />


            </form>
        </div>
    )
}