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

## WIREFRAME

![Alt text](public/imgs/wireframe.png) <br /><br />

## Objective:  

The Coffee Shop Backend and Frontend is a fullstack project that is built with a Next.js-based frontend and backend applications that includes a variety of components and features to create a user-friendly experience for customers that serves as an e-commerce coffee shop that is fun and easy to navigate. This project integrates Storybook for component development, and building stubs for your components. Follow an incremental approach to ensure all components work as expected before moving forward. The fullstack app provides APIs for managing products with full CRUD (Create, Read, Update, Delete) functionality. The backend uses MongoDB with Mongoose for database operations, allowing efficient storage and retrieval of product data.

### **Key Tools & Technologies**
- **Frontend:** Next.js, React, DaisyUI, Storybook, Iconify, Vercel, Hooks (useState, useQuery)
- **Backend:** Node.js, API v1 (non-auth), and API v2 (auth)
- **Database:** (Database type to be decided: e.g., MongoDB, PostgreSQL)
- **Version Control:** Git/GitHub

## Components
- [x] About
- [x] Button
- [x] Cart Icon
- [x] Cart Summary
- [x] Checkout Form
- [x] Footer
- [x] Header
- [x] Login Form
- [x] Navbar
- [x] Product Card
- [x] SignUp Form
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
- [x] **Database that stores user data (MongoDB)**
- [x] **Updating, and deleting.JWT User Authentication & Protected Routes**

## Attribution

Give credit to any resources or inspiration you used in this project.

- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Storybook](https://storybook.js.org/)
- [MongoDB](https://www.mongodb.com)
- [Cloudinary](https://cloudinary.com)
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

## Stretch Goals
- [x] - **Users with Roles to access protected routes**
- [x] - **Custom middleware**
- [x] - **Custom Hooks to clean up the code in your components**
- [x] - **Presigned uploads with Cloudinary to avoid file uploads to the server**
- [x] - **Stretch Goal: Empty Cart Animated Icon that redirects to Products.js Page if cart is empty**

## Deploy Backend on Render 

- [x] - backend successfully deployed on Render.com 
- [x] - Backend Link => https://github.com/Raqueldelamer/coffee-shop

![Alt text](public/imgs/render-backend.png) <br /><br />


## **Setup Storybook**


- [x] - Verify Storybook runs at [http://localhost:6006](http://localhost:6006).
- [x] - Verify all components render correctly in Storybook.
- [x] - Add one screenshot of the Storybook interface to your README.md

![Alt text](public/imgs/storybook.png) <br /><br />

## **Setup .env File and Connect to Backend**

1. - [x] **Created `.env.local` File** 

2. - [x] **Connect to POSTMAN Backend**:
   - CRUD (Create, Read, Update, Delete) functionality 

   ![Alt text](public/imgs/postman.jpg) <br /><br />

   - GET All Products

   ![Alt text](public/imgs/get.png) <br /><br />

   - PUT Update Products

   ![Alt text](public/imgs/put-update-products.png)<br /><br />

   - DELETE Product by ID

   ![Alt text](public/imgs/delete-by-id.png) <br /><br />


---

## **Created Stub Functions & Implemented Product List Page Functionality**
- [x] - Products fetched via Backend URL, implementing Product Card Component w product data and Add to Cart Button which redirects to the cart.js

![Alt text](public/imgs/products-page.jpg) <br /><br />

- [x] - Replace stub functions with real functionality to:
   - Load and filter products.
   - Pass `viewProduct` to the button in `ProductCard` using **prop drilling**.

## **Implemented Product Display Page Functionality Instructions**:

1. Use `fetchProduct` to load product data via .env.local to BACKEND https://coffee-shop-backend-3ovb.onrender.com/api/v2/products .

2. Pass `addToCart` into the button in the `ProductCard` component using **prop drilling**.

---
## **Implemented Product Display Page by Category ("category":) Functionality**:

![Alt text](public/imgs/category-shop.png) <br /><br />

## **Implemented Shopping Cart Page Functionality**:

1. Replace the stub functions for `loadCart`, `addToCart`, `removeFromCart`, and `saveCartToLocalStorage` with real functionality.

- **Key Deliverables:**
- [x] - Interactive shopping cart with add/remove item functionality.
- [x] - Fully integrated shopping cart experience.

- [x] - Stretch Goal: Empty Cart Animated Icon that redirects to Products.js Page if cart is empty

![Alt text](public/imgs/empty-cart.jpg) <br /><br />

- [x] - Products Added redirected into Shopping Cart

![Alt text](public/imgs/full-shopping-cart.png) <br /><br />

- [x] - Shopping cart saved to Local Storage, redirects to CheckOut.js

- [x] - Product successfully removed from Shopping cart.js

![Alt text](public/imgs/product-removed.png) <br /><br />
---

## **Implemented Checkout Page Functionality**

- [x] - Checkout Cart Summary and Checkout Form
- [x] - Implement a controlled form for checkout details

![Alt text](public/imgs/checkout-cart-summary.png) <br /><br />

### **Add functionality to collect checkout information and save it to localStorage.**:

![Alt text](public/imgs/local-storage.png) <br /><br />

## **Implemented a function to save the cart order details to localStorage.**

- [x] - After the form is submitted you can save the order details to localStorage. You can use the `saveCartToLocalStorage` function as a reference.

### **Shared Functions**:
1. `loadProductsFromLocalStorage()`: Returns products.
2. `loadCartFromLocalStorage()`: Returns the cart.
3. `saveCartToLocalStorage(cart)`: Saves cart to localStorage.
4. `saveProductsToLocalStorage(products)`: Saves products to localStorage.
5. `saveUserToLocalStorage(user)`: Saves user to localStorage.
6. `loginUserToLocalStorage(user)`: Saves logged-in user to localStorage.

---

## **Implemented Login and Register Pages**

### **Instructions**:
- [x] - Replace the stub functions in `registerUser` and `signInUser` with functionality to save user data to localStorage.

- [x] - Create controlled forms for the login and register pages. Then save the data to localStorage using the utility functions.

![Alt text](public/imgs/logged-in.png) <br /><br />


---
## **Implemented a Create Product page for Authenticated Logged In Admin User in `/admin/products/create.js`**

- [x] - Successfully create product by Authenticated Admin User

![Alt text](public/imgs/create-product.png) <br /><br />

![Alt text](public/imgs/create-save-localstorage.png) <br /><br />



---



















































