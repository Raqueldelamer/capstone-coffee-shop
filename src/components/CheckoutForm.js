import { useState, useEffect } from "react";
import Button from "./Button";

export default function CheckoutForm({ handleCheckout }) {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [cardInfo, setCardInfo] = useState("");

    // state w localStorage
    useEffect(() => {
        setName(localStorage.getItem("name") || "");
        setAddress(localStorage.getItem("address") || "");
        setCity(localStorage.getItem("city") || "");
        setState(localStorage.getItem("state") || "");
        setZipcode(localStorage.getItem("zipcode") || "");
        setCardInfo(localStorage.getItem("cardInfo") || "");
    }, []);

      // update localStorage
    useEffect(() => {
        if (name || address || city || state || zipcode || cardInfo) {
            localStorage.setItem("name", name);
            localStorage.setItem("address", address);
            localStorage.setItem("city", city);
            localStorage.setItem("state", state);
            localStorage.setItem("zipcode", zipcode);
            localStorage.setItem("cardInfo", cardInfo);
        }
    }, [name, address, city, state, zipcode, cardInfo]);

    // Handle form submission
    function handleFormSubmit(e) {
        e.preventDefault();

    handleCheckout(name, address, city, state, zipcode, cardInfo);
        alert("Thank you for your order!");
        // reset form fields after submit
        setName("");
        setAddress("");
        setCity("");
        setState("");
        setZipcode("");
        setCardInfo("");
    }

    return (
        <div className="bg-base-100 shadow-md rounded-lg p-7 max-w-md w-full">
            <div className="container justify-center">   
            <h2 className="text-2xl font-mono font-semibold text-center mb-4">Payment Information</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col space-y-1">
                <div className="form-control">
                <label className="label-text">
                    <span className="label">Name:</span>
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

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Credit Card Info:</span>
                </label>
                <input className="input input-bordered w-full mb-2" 
                        type="text" 
                        placeholder="**** **** **** ****" 
                        id="cardInfo" 
                        name="cardInfo"
                        required value={cardInfo}
                        onChange={(e) => setCardInfo(e.target.value)} />
                </div>

                <Button label="Submit"
                        handleClick={handleFormSubmit} 
                        className="btn btn-primary border border-black text-black font-bold py-2 px-4 rounded" />


                </form>
            </div>
        </div>
    )
}