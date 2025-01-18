
import { useState } from "react";
import Button from "./Button";


export default function CheckoutForm ({ handleCheckout }) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");


    function handleFormSubmit(e) {
        e.preventDefault();
        //const name= event.target.elements.name.value;
        //const address= event.target.elements.address.value;
        //const city= event.target.elements.city.value;
        //const state= event.target.elements.city.value;
        //const zipcode= event.target.elements.zipcode.value;

        // Reset on submit
        setName("");
        setAddress("");
        setCity("");
        setState("");
        setZipcode("");
        
        handleCheckout(name, address, city, state, zipcode);
        alert('Thank you for your order!');
    }

    return (
        <div className="bg-base-100 shadow-md rounded-lg p-8 max-w-md w-full">
            <div className="container justify-center">   
            <h2 className="text-2xl font-mono font-semibold text-center mb-4">Fill Out Form</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col space-y-1">
                <div className="form-control">
                <label className="label-text">
                    <span className="label-text">Name:</span>
                </label>
                <input className="input input-bordered w-full" 
                        type="text" 
                        placeholder="" 
                        id="name" 
                        name="name"
                        required value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Address:</span>
                </label>
                <input className="input input-bordered w-full"
                        type="text" 
                        placeholder="" 
                        id="address" 
                        name="address"
                        required value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">City:</span>
                </label>
                <input className="input input-bordered w-full" 
                        type="text" 
                        placeholder="" 
                        id="city" 
                        name="city"
                        required value={city}
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">State:</span>
                </label>
                <input className="input input-bordered w-full" 
                        type="text" 
                        placeholder="" 
                        id="state" 
                        name="state"
                        required value={state}
                        onChange={(e) => setState(e.target.value)} />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Zip Code:</span>
                </label>
                <input className="input input-bordered w-full" 
                        type="text" 
                        placeholder=""
                        id="zipcode" 
                        name="zipcode"
                        required value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)} />
                </div>

                <Button label="Submit"
                        handleClick={handleFormSubmit} 
                        className="btn btn-primary border border-black text-black font-bold py-2 px-4 rounded" />


            </form>
            </div>
        </div>
    )
}