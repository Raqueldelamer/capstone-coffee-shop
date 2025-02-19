import { useState } from 'react';
import { useRouter } from "next/router";
// import { useAuthFetch } from '@/hooks/api';
import useAuth from '@/hooks/auth';
import Navbar from '@/components/Navbar';
import Header from "@/components/Header";
import TestButton from "@/components/TestButton";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function CreateProducts() {
    const router = useRouter();
    const{token} = useAuth();
    console.log(token);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
    });

    function handleCtaClick() {
        console.log('CTA button clicked!');
        router.push('/products/mock');
    }

    // goal; say "form submitted" on submit
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        alert("Product data submitted and created!");
         // goal; get all the input values, and log them
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const category = event.target.elements.category.value;
        const stock = event.target.elements.stock.value;

        const product = {
            name,
            description,
            price,
            category,
            stock,
        }
        createProduct(product);

         // Reset form fields by clearing the formData state
        setFormData({
            name: '',
            description: '',
            price: '',
            category: '',
            stock: '',
    });
}
    

    async function createProduct(product) {
        // const { name, description, price, stock } = product;
        
        console.table(product);

        // goal: Fetch POST
        try {
            const response = await fetch("https://coffee-shop-backend-3ovb.onrender.com/api/v1/products", {
                method: "POST",
                body: JSON.stringify(product),
                headers: { "Content-Type": "application/json; charset=UTF-8", },
                            "Authorization": `Bearer ${token}` // token
                
        });
            const data = await response.json();
            console.log(data);
            console.log("User Token:", token);

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
                <h2 className='text-center text-xl font-bold font-mono text-yellow-500'>CREATE PRODUCT FORM</h2>
            <form onSubmit={handleSubmit} className="form-control text-yellow-500 mt-5 text-center font-sans text-l space-y-">
            <label className="label">
                <span className="label-text block mb-2">Product:</span>
                <input type="text" placeholder="product title" name="name" className="input input-bordered" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </label>
                
                <label className="label">
                <span className="label-text block mb-2">Description:</span>
                <input type="text" placeholder="description" name="description" className="input input-bordered"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </label>

                <label className="label">
                <span className="label-text block mb-2">Price:</span>
                <input type="text" placeholder="price" name="price" className="input input-bordered"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                </label>

                <label className="label">
                <span className="label-text block mb-2">Category:</span>
                <input type="text" placeholder="category" name="category" className="input input-bordered"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                </label>
                
                <label className="label">
                <span className="label-text block mb-2">Stock:</span>
                <input type="text" placeholder="in stock" name="stock" className="input input-bordered mb-2"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })} />
                </label>
            <Button label="SUBMIT TO CREATE NEW PRODUCT" className="mb-2" />
            </form>
            <center>
                <TestButton label="CLICK TO SEE NEW PRODUCT " handleClick={handleCtaClick} className="mt-3" />
            </center>
            </div>
            </div>
            
            </div>
            <Footer />
        </>
    );
}