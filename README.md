## Guide: Coffee Shop Frontend & Backend Capstone Project

Live link that displays steps initialized and completed:
- [x] https://coffee-shop-frontend-azure.vercel.app 
- [x] https://coffee-shop-frontend-azure.vercel.app/sign-up 
- [x] https://coffee-shop-frontend-azure.vercel.app/login
- [x] https://coffee-shop-frontend-azure.vercel.app/products 
- [x] https://coffee-shop-frontend-azure.vercel.app/cart 
- [x] https://coffee-shop-frontend-azure.vercel.app/checkout

## Splash Page: COFFEE, TEA, & READ!

![Alt text](public/imgs/splash.jpg) <br /><br />

## Objective:  

The Coffee Shop Backend and Frontend is a project to build a Next.js-based frontend and backend application that will include a variety of components and features to create a user-friendly experience for customers that serves as an e-commerce coffee shop. This project integrates Storybook for component development, and building stubs for your components. Follow an incremental approach to ensure all components work as expected before moving forward. The fullstack app provides APIs for managing products with full CRUD (Create, Read, Update, Delete) functionality. The backend uses MongoDB with Mongoose for database operations, allowing efficient storage and retrieval of product data.

### **Key Tools & Technologies**
- **Frontend:** Next.js, DaisyUI, Storybook, Iconify, React Hooks (useState, useQuery)
- **Backend:** Node.js, API v1 (non-auth) and API v2 (auth)
- **Database:** (Database type to be decided: e.g., MongoDB, PostgreSQL)
- **Version Control:** Git/GitHub

## Components
- [x] Button
- [x] Cart Icon
- [x] Cart Summary
- [x] Checkout Form
- [x] Footer
- [x] Header
- [x] Login Form
- [x] Navbar
- [x] Product Card
- [x] Signup Form
- [x] Test Button


## Features
- [x] **Tailwind CSS with DaisyUI Theme integration.**
- [x] **Test Custom CSS**
- [x] **Storybook for component development.**
- [x] **Create Skeleton for All Components**
- [x] **Create Stub Functions for all Components**
- [x] **Implement Product List Page Functionality**
- [x] **Verify in Storybook**
- [x] **Implement Shopping Cart Page Functionality**
- [x] **Implement Login and Register Pages**
- [x] **CRUD Operations: Implemented APIs for managing products, including creating, reading,** 
- [x] **Updating, and deleting.JWT User Authentication & Protected Routes**

## Attribution

Give credit to any resources or inspiration you used in this project.

- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Storybook](https://storybook.js.org/)
- [Iconify](https://icon-sets.iconify.design)


### **Splash Home Page. Break Splash Page Into Components**
In `index.jsx`, build a splash page that includes the following:
- [x] - **Header**
- [x] - **Hero Image with Call-to-Action (CTA) Button**
- [x] - **Brief Description**
- [x] - **Footer**
- [x] - Split the page into components, such as `Header`, `Footer`, `HeroSection`, and `Button`.
- [x] - Verify each component works in Storybook.
- [x] - Create a new story for each new component.


## Deploy on Vercel
- [x] - It's best to deploy your app to Vercel right away to ensure it works as expected in a production environment.

![Alt text](public/imgs/vercel.jpg) <br /><br />

## Step 0: **Setup Storybook**

a. **Install Storybook**:

   ```bash
   npx storybook@latest init
   ```

b. **Run Storybook**:

Storybook may will already be running after the installation. If not, you can start it with:

   ```bash
   npm run storybook
   ```

- [x] - Verify Storybook runs at [http://localhost:6006](http://localhost:6006).
- [x] - Verify all components render correctly in Storybook.
- [x] - Add one screenshot of the Storybook interface to your README.md

![Alt text](public/imgs/storybook.png) <br /><br />

## Step 1: **Setup .env File and Connect to Backend**

1. **Create `.env.local` File**:

   ```plaintext
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_API_BASE_URL_PROD=https://api.onrender.com
   ```

2. **Connect to POSTMAN Backend**:
   - POST Products on Postman Backend URL 

   ![Alt text](public/imgs/postman.jpg) <br /><br />

   - GET All Products

   ![Alt text](public/imgs/get.png) <br /><br />

3. **Test Backend Connection**:
   - Verify the console logs the response from the backend.

---

## **Step 2: Create Stub Functions**

### **Instructions**:
1. **Stub Functions**: Create empty functions in the respective Page components. For now, these will log messages to the console or display alerts.
2. **Placement**:
   - Add the functions inside the **Page function** of each page.
   - Some will be triggered on page load using `useEffect`.
   - Others will be triggered by button clicks.
3. **Prop Drilling**: Pass functions as props to child components where needed.

### **List of Stub Functions and Locations**:
| **Page/Component**             | **Functions to Add**                          |
|---------------------------------|-----------------------------------------------|
| **Header Component**            | `goToLogin`, `goToSignup`                     |
| **Register Page** (`signup.jsx`) | `registerUser(user)`                          |
| **Login Page** (`login.jsx`)    | `signInUser(username, password)`              |
| **Product List Page**           | `loadProducts()`, `filterProducts(category, start, limit)`, `viewProduct(product)` |
| **Product Display Page**        | `fetchProduct(id)`, `addToCart(product)`      |
| **Cart Page**                   | `loadCart()`, `addToCart(product)`, `removeFromCart(product)`, `saveCartToLocalStorage(cart)` |
| **Utility Functions** (`util/index.js`) | `loadProductsFromLocalStorage`, `loadCartFromLocalStorage`, `saveCartToLocalStorage`, `saveProductsToLocalStorage`, `saveUserToLocalStorage`, `loginUserToLocalStorage` |

### **Example**:
```javascript
// src/pages/cart.jsx
import { useEffect, useState } from 'react';

import ProductCard from '@/components/ProductCard';

// Stub data for Cart Page
import data from '@/mocks/cart.json';

export default function CartPage() {
  const [cart, setCart] = useState([]);

// Stub functions for Cart Page
  const loadCart = () => console.log("Cart loaded");
  const addToCart = (product) => console.log(`Added ${product.name} to cart`);
  const removeFromCart = (product) => console.log(`Removed ${product.name} from cart`);
  const saveCartToLocalStorage = (cart) => console.log("Cart saved to localStorage");

  // use useEffect to put initialization code.
  useEffect(() => {
    loadCart();
    setCart([...data]);
  }, []);

  const handleClick = (product) => {
    addToCart(product);
  };

  // Note how we pass the handleClick function to the ProductCard component.
  // This will passed again to the button in the ProductCard component.
  // Passing a prop multiple times is called prop drilling.
  return (<div>
  <h1>Shopping Cart: {cart.length} items in cart</h1>
  {cart.map((product) => (
    <ProductCard 
      key={product.id}
      product={product}
      handleClick={() => handleClick(product)} 
    />
  ))}

  </div>);
}
```


  
## **Step 3: Implement Product List Page Functionality**
- [x] - Products fetched via Backend URL, implementing Product Card Component w product data and Add to Cart Button which redirects to the cart.js

![Alt text](public/imgs/products-page.jpg) <br /><br />

### **Instructions**:
- [x] - Replace stub functions with real functionality to:
   - Load and filter products.
   - Pass `viewProduct` to the button in `ProductCard` using **prop drilling**.



## **Step 4: Implement Product Display Page Functionality Instructions**:

1. Use `fetchProduct` to load product data via .env.local to BACKEND https://coffee-shop-backend-5fmn.onrender.com/api/v1/products/ .

2. Pass `addToCart` into the button in the `ProductCard` component using **prop drilling**.

---

## **Step 5: Implement Shopping Cart Page Functionality**:

1. Replace the stub functions for `loadCart`, `addToCart`, `removeFromCart`, and `saveCartToLocalStorage` with real functionality.

- **Key Deliverables:**
- [x] - Interactive shopping cart with add/remove item functionality.
- [x] - Fully integrated shopping cart experience.

- [x] - Stretch Goal: Empty Cart Animated Icon that redirects to Products.js Page if cart is empty

![Alt text](public/imgs/empty-cart.jpg) <br /><br />

- [x] - Products Added redirected into Shopping Cart
- [x] - Shopping cart saved to Local Storage, redirects to CheckOut.js

![Alt text](public/imgs/full-shopping-cart.png) <br /><br />

- [x] - Shopping cart saved to Local Storage, redirects to CheckOut.js

- [x] - Product successfully removed from Shopping cart.js

![Alt text](public/imgs/product-removed.png) <br /><br />
---

## **Step 6: Implement Checkout Page Functionality**

- [x] - Checkout Cart Summary and Checkout Form
- [x] - Implement a controlled form for checkout details

![Alt text](public/imgs/checkout-cart-summary.png) <br /><br />

### **Add functionality to collect checkout information and save it to localStorage.**:

![Alt text](public/imgs/local-storage.png) <br /><br />

## Implement a function to save the cart order details to localStorage.

- [x] - After the form is submitted you can save the order details to localStorage. You can use the `saveCartToLocalStorage` function as a reference.

### **Shared Functions**:
1. `loadProductsFromLocalStorage()`: Returns products.
2. `loadCartFromLocalStorage()`: Returns the cart.
3. `saveCartToLocalStorage(cart)`: Saves cart to localStorage.
4. `saveProductsToLocalStorage(products)`: Saves products to localStorage.
5. `saveUserToLocalStorage(user)`: Saves user to localStorage.
6. `loginUserToLocalStorage(user)`: Saves logged-in user to localStorage.

---

## **Step 7: Implement Login and Register Pages**

### **Instructions**:
- [x] - Replace the stub functions in `registerUser` and `signInUser` with functionality to save user data to localStorage.

- [x] - Create controlled forms for the login and register pages. Then save the data to localStorage using the utility functions.

![Alt text](public/imgs/logged-in.png) <br /><br />


---
## **Step 8: Implement a Create Product page for Authenticated Logged In Admin User in `/admin/products/create.js`**

- [x] - Successfully create product by Authenticated Admin User

![Alt text](public/imgs/create-product.png) <br /><br />

![Alt text](public/imgs/create-save-localstorage.png) <br /><br />



---



# Day 3 **5. Product Page => https://coffee-shop-frontend-azure.vercel.app/products**




### **Step 4**: Update Product Page to include an event handler

**Your challenge** is to create a function in `src/pages/products/[id].jsx` that will fire when the button is clicked. You can use `console.log` or `alert` to verify that the function is working.

Look at the previous examples for how to pass a function to a component.

---

## **6. Products Page**

The products page will display a list of products. You will use the `ProductCard` component to display each product. You will get the data from the mock products file and pass the data to the `ProductCard` components.

- in `src/pages/products/index.jsx`, create a layout for the products page.
- Use the `ProductCard` component to display a list of products.
- Create mock data for products and iterate over them using `.map()`.
- See [Rendering Lists](https://react.dev/learn/describing-the-ui#rendering-lists) in the React documentation for more information.



# Day 2 Guide: Coffee Shop Frontend => https://coffee-shop-frontend-azure.vercel.app

## Objective:  

Continue building the project you started in Day 1. Today, you will create pages for the Coffee Shop frontend, then break them into reusable components while the layout and structure are fresh in your mind. Utilize Storybook to verify components, and enhance the design for consistency across the application.

---


## **1. Create Basic Pages**
Set up the following blank pages in the `pages` directory. These pages will serve as the foundation of your application:

### **Required Pages**:
- `index.jsx`
- `products/index.jsx`
- `products/[id].jsx`
- `cart.jsx`
- `checkout.jsx`
- `signup.jsx`
- `signin.jsx`


---


### **Step 3**: Example: Update the Button to handle click events

- in `src/components/Button.jsx`:
  ```jsx
  export default function Button({ label, handleClick }) {
    return (
      <button onClick={handleClick} className="btn btn-primary">
        {label}
      </button>
    );
  }
  ```
- in `index.jsx`:
  ```jsx
  import Button from '../components/Button';
  import { useRouter } from 'next/router';
  ...
  export default function Home() {
    const router = useRouter();
    function handleCtaClick() {
      console.log('CTA button clicked!');
      router.push('/signup');
    }
    return (
      <div>
      ...
        <Button label="Sign Up Now" handleClick={handleCtaClick} />
      ...
      </div>
    );
  }
  ```
  This will allow the button to navigate to the signup page when clicked, but also keep the Button component flexible for other uses.

---

## **3. Signup Page**

Follow a similar process to the Splash page for the signup page and the rest of the pages. The goal is to build out your design, then break it into components. This will help you keep things organized. Focus on visual design and components. You will add functionality, like button clicks, later.

### **Step 1**: Layout
- Include the header and footer components from the splash page.
- Add a form with the following fields:
  - Name
  - Email
  - Password
  - Submit Button

### **Step 2**: Break the Form Into a Component
- Create a `SignupForm` component and use the following prop:
  - **`buttonLabel`**: A string that determines the button's text.
- Use **PropTypes** to validate `buttonLabel` as a string.

Example (Note 1: insert your own JSX and design choices into this component.) (Note 2: Don't forget to include PropTypes so you can validate the prop types in storybook.):
```jsx
import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function SignupForm({ buttonLabel }) {
  return (
    <form className="form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Button label="Sign Up" handleClick={()=>{console.log("clicked sign up")}}/>
    </form>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
```






































