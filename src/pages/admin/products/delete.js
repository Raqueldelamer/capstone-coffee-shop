import { useState } from 'react';
// import { useRouter } from "next/router";
// import { useAuthFetch } from '@/hooks/api';
import useAuth from '@/hooks/auth';
import Navbar from '@/components/Navbar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function CreateProducts() {
    //const router = useRouter();
    const{token} = useAuth();
    console.log(token);

    const [formData, setFormData] = useState({
        name: '',
        category: '',
    });

    // goal; say "form submitted" on submit
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        alert("Product data deleted!");
         // goal; get all the input values, and log them
        const name = event.target.elements.name.value;
        const category = event.target.elements.category.value;


        const product = {
            name,
            category,
        }
        createProduct(product);
    }

    async function createProduct(product) {
        // const { name, description, price, stock } = product;
        console.table(product);

        // goal: Fetch POST
        try {
            const response = await fetch("https://coffee-shop-backend-5fmn.onrender.com/api/v1/products/", {
                method: "DELETE",
                body: JSON.stringify(product),
                headers: { "Content-Type": "application/json; charset=UTF-8", },
                
        });
            const data = await response.json();
            console.log(data);

        }   catch(error) {
            console.log(error);
        }
    }

    // goal 4: get token
        const divStyle = {
        backgroundImage: 'url(/imgs/book-cafe.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'fill',
        backgroundColor: 'brown',
        height: '100vh',
        color: 'black',
    }
    return (
        <>  
            <Navbar menuItems={["HOME", "", "PRODUCTS"]} />
            <div style={divStyle}>
            <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
            
            <div className="card bg-base-100 mx-auto justify-center flex-grow max-w-sm">
            <div className="card-body justify-center">
            <form onSubmit={handleSubmit} className="form-control text-yellow-500 mt-5 text-center font-sans text-l space-y-">
            <label className="label">
                <span className="label-text block mb-2">Product Title:</span>
                <input type="text" placeholder="product title" name="name" className="input input-bordered" />
                </label>
                

                <label className="label">
                <span className="label-text block mb-2">Category:</span>
                <input type="text" placeholder="category" name="category" className="input input-bordered mb-3" />
                </label>
                
                
            <Button label="Submit to Delete Product" />
            </form>
            </div>
            </div>
            
            </div>
            <Footer />
        </>
    );
}