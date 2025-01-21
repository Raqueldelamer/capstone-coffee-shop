## Guide: Coffee Shop Frontend & Backend Capstone Project

Live link that displays steps initialized and completed:
- [x] https://coffee-shop-frontend-azure.vercel.app 
- [x] https://coffee-shop-frontend-azure.vercel.app/sign-up 
- [x] https://coffee-shop-frontend-azure.vercel.app/products 
- [x] https://coffee-shop-frontend-azure.vercel.app/cart 
- [x] https://coffee-shop-frontend-azure.vercel.app/checkout

## Splash Page

![Alt text](public/imgs/splash.jpg) <br /><br />

## Objective:  
The Coffee Shop Backend is a Node.js-based Express application that serves as the backend for an e-commerce coffee shop. It provides APIs for managing products with full CRUD (Create, Read, Update, Delete) functionality. The backend uses MongoDB with Mongoose for database operations, allowing efficient storage and retrieval of product data.

## Key Tools & Technologies
- Frontend: Next.js, DaisyUI, Tailwind CSS, Storybook, Iconify, React Hooks (useState, useQuery)
- Backend: Node.js, API v1 (non-auth) and API v2 (auth)
- Database: (Database type to be decided: e.g., Vercel, MongoDB, Postman, PostgreSQL)
- Version Control: Git/GitHub

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
- [x] **Create Stub Functions**
- [x] **Implement Product List Page Functionality**
- [x] **Verify in Storybook**
- [x] **Implement Shopping Cart Page Functionality**
- [x] **Implement Login and Register Pages**
- [x] **CRUD Operations: Implemented APIs for managing products, including creating, reading,** 
- [x] **uUdating, and deleting.JWT User Authentication & Protected Routes**



## Step 0: **Setup .env File and Connect to Backend**

1. **Create `.env.local` File**:

   ```plaintext
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_API_BASE_URL_PROD=https://api.onrender.com
   ```

2. **Connect to Backend**:
   - Create a simple component:

     ```javascript
     // components/HelloBackend.js
     import api from '../utils/api';

     export default function HelloBackend() {
       const fetchGreeting = async () => {
         const response = await api.get('/hello-world');
         console.log(response.data);
       };

       fetchGreeting();

       return <div>Hello Backend</div>;
     }
     ```

3. **Test Backend Connection**:
   - Verify the console logs the response from the backend.

---

## **Step 1: Create Stub Functions**

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

### **Git Commit**:
```bash
git add src/pages/ src/components/ src/util/
git commit -m "Add stub functions for each page and utility functions for localStorage"
```

---

## **Step 2: Implement Product List Page Functionality**

### **Instructions**:
1. Replace stub functions with real functionality to:
   - Load and filter products.
   - Pass `viewProduct` to the button in `ProductCard` using **prop drilling**.
2. Use mock data to populate the product list.
   - check the Appendix at the end of this document for examples of mock data and utility functions.

Observe how the `viewProduct` function is passed down to the `ProductCard` component and then to the `Button` component. This is an example of **prop drilling**. You will often use this technique to pass functions down to child components. It can be tedious, but it's a common pattern in React.

Example of `viewProduct` function:
```javascript
// in src/pages/products/index.jsx
const viewProduct = (product) => {
  router.push(`/products/${product.id}`);
};
...
<ProductCard product={product} handleClick={() => viewProduct(product)} />
...
```

```javascript
// in src/components/ProductCard.jsx
<Button handleClick={() => handleClick(product)}>View Product</button>
```

```javascript
// in src/components/Button.jsx
export default function Button({ handleClick, label }) {
  return <button onClick={handleClick}>{label}</button>;
}
```


### **Git Commit**:
```bash
git add src/pages/products/
git commit -m "Implement functionality for Product List Page with mock data and prop drilling"
```

---

## **Step 3: Implement Product Display Page Functionality**

### **Instructions**:
1. Use `fetchProduct(id)` to load mock product data by ID.
2. Pass `addToCart` into the button in the `ProductCard` component using **prop drilling**.

### **Git Commit**:
```bash
git add src/pages/products/[id].jsx
git commit -m "Implement functionality for Product Display Page with addToCart prop drilling"
```

---

## **Step 4: Implement Shopping Cart Page Functionality**

### **Instructions**:
1. Replace the stub functions for `loadCart`, `addToCart`, `removeFromCart`, and `saveCartToLocalStorage` with real functionality.
2. Use mock cart data for testing.

### **Git Commit**:
```bash
git add src/pages/cart.jsx
git commit -m "Implement functionality for Shopping Cart Page with mock cart data"
```

---

## **Step 5: Implement Checkout Page Functionality**

### **Instructions**:
1. Add functionality to collect checkout information and save it to localStorage.
2. Use a mock JSON object for order details.

### Part 1: Implement a controlled form for checkout details:

Controlled forms are a common pattern in react. React can't access the forms directly, so we need to `useState` and an `eventHandler` to manage the form data as it changes.


Part 2: Implement a function to save the order details to localStorage.

After the form is submitted (see the last video above), you can save the order details to localStorage. You can use the `saveCartToLocalStorage` function as a reference.

### **Git Commit**:
```bash
git add src/pages/checkout.jsx
git commit -m "Implement functionality for Checkout Page with mock order data"
```

---

## **Step 6: Implement Login and Register Pages**

### **Instructions**:
1. Replace the stub functions in `registerUser` and `signInUser` with functionality to save user data to localStorage.
2. Validate user credentials on the login page using mock data.

Be sure to implement controlled forms for the login and register pages. Then save the data to localStorage using the utility functions.

### **Git Commit**:
```bash
git add src/pages/signup.jsx src/pages/login.jsx
git commit -m "Implement functionality for Login and Register Pages with localStorage"
```

---

## **Utility Functions in `/src/util/index.js`**

### **Shared Functions**:
1. `loadProductsFromLocalStorage()`: Returns products.
2. `loadCartFromLocalStorage()`: Returns the cart.
3. `saveCartToLocalStorage(cart)`: Saves cart to localStorage.
4. `saveProductsToLocalStorage(products)`: Saves products to localStorage.
5. `saveUserToLocalStorage(user)`: Saves user to localStorage.
6. `loginUserToLocalStorage(user)`: Saves logged-in user to localStorage.



#### **Day 5: Shopping Cart Feature**
- [x] **Goals:**
  - Build a **shopping cart sidebar/popup** for user-friendly cart interactions.
  - Ensure seamless integration with the cart functionality implemented on Day 3.

- **Key Deliverables:**
  - Interactive shopping cart with add/remove item functionality.
  - Fully integrated shopping cart experience.

---

### **Key Tools & Technologies**
- **Frontend:** Next.js, DaisyUI, Storybook, React Hooks (useState, useQuery)
- **Backend:** Node.js, API v1 (non-auth) and API v2 (auth)
- **Database:** (Database type to be decided: e.g., MongoDB, PostgreSQL)
- **Version Control:** Git/GitHub

---

### **Expected Outcome**
By the end of Day 5, the project will be a fully functional e-commerce application with:
- Modular and reusable components.
- Secure and efficient API endpoints.
- A user-friendly shopping cart.
- A robust authentication system.


# Day 3 ## **5. Product Page** => https://coffee-shop-frontend-azure.vercel.app/products

### **Step 1**: Layout
- In `src/pages/products/[id].jsx`, create a layout for a single product page.
- Include a header and footer.
- import the data from the mock products file at `src/mocks/products.json`.
- Create a product card displaying:
  - Product image
  - Name
  - Description
  - Price
  - Add to Cart Button

**Starter code for Product Page**:
```jsx
import products from '../../mocks/products.json';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const id = router.query.id;
  const product = products[id] || {};;
  return (
    <div>
      {/* TODO: Put this in CardProduct --> */}
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Button title="Add to Cart"></Button>
    </div>
  );
}
```

### **Step 2**: Break Into a `ProductCard` Component
- Create or update your `ProductCard` component.
- Pass the product data as a prop to the `ProductCard` component.
- Use **PropTypes** to validate the product as an object.

**Example**: Note: insert your own JSX and design choices into this component:
```jsx
import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Button label="Add to Cart"/>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
```

### **Step 3**: Verify in Storybook
- Verify your story for `ProductCard` with mock product data.

### **Step 4**: Update Product Page to include an event handler

**Your challenge** is to create a function in `src/pages/products/[id].jsx` that will fire when the button is clicked. You can use `console.log` or `alert` to verify that the function is working.

Look at the previous examples for how to pass a function to a component.

git commit with a message like "Add Product page."

---

## **6. Products Page**

The products page will display a list of products. You will use the `ProductCard` component to display each product. You will get the data from the mock products file and pass the data to the `ProductCard` components.

- in `src/pages/products/index.jsx`, create a layout for the products page.
- Use the `ProductCard` component to display a list of products.
- Create mock data for products and iterate over them using `.map()`.
- See [Rendering Lists](https://react.dev/learn/describing-the-ui#rendering-lists) in the React documentation for more information.

Example:
Note: you may put the mock data in a separate file and import it. You may also add test images to the `public` folder in your project.
```jsx
import ProductCard from '../components/ProductCard';
import products from '../mocks/products.json';
import '@/styles/products.css';

// const products = [
//   { _id: 1, name: 'Coffee A', description: 'Rich and smooth.', price: 10, image: '/coffee-a.jpg' },
//   { _id: 2, name: 'Coffee B', description: 'Dark roast.', price: 12, image: '/coffee-b.jpg' },
// ];

export default function ProductsPage() {
  const productsJSX = products.map((product) => {
    // Use key prop every time you use map.
    // This is a unique identifier for each product.
    // React is not smart enough to keep track of the order of items in a list.
    // so we need to give it help by providing a unique key prop.
    return (<ProductCard key={product._id} product={product} />)
  });
  return (
    <div className="products-grid">
      {productsJSX}
    </div>
  );
}
```

- Use Flexbox or Grid for layout.

git commit with a message like "Add Products page to display multiple products."

---


# Day 2 Guide: Coffee Shop Frontend => https://coffee-shop-frontend-azure.vercel.app

## Objective:  

Continue building the project you started in Day 1. Today, you will create pages for the Coffee Shop frontend, then break them into reusable components while the layout and structure are fresh in your mind. Utilize Storybook to verify components, and enhance the design for consistency across the application.

Note: If you are unable to complete the full assignment, focus on the login pages and the product pages. If you can't get to the cart, you can still make a decent project. Then, you can fill in the other pages later if you have time, or leave them as a stretch goal. However, some of the pages in the Cart functionality are repetitive, so you may be able to reuse components from the product page for the cart page.

Here are some helpful resources you may look into:

- [Your UI as a Tree](https://react.dev/learn/understanding-your-ui-as-a-tree) for understanding how to break down your UI into components.
- [Rendering Lists](https://react.dev/learn/describing-the-ui#rendering-lists) for arrays of data
- [Adding interactivity with React](https://react.dev/learn/adding-interactivity) for button clicks and form submissions.
- [React Forms](https://daveceddia.com/react-forms/). You may find this helpful in day three when finish design and begin work on functionality.

---

**Note:** Before you begin, create a new branch for your work. Make sure your main branch is up to date. Then create a new branch called design-components.

```bash
git switch main
git pull
git switch -c design-components
```

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


Add a mock data json file for products and for the cart. You can use this data to test your components and pages.

You can put them in a `mocks` folder in the root of your project. You can name them `products.json` and `cart.json`. Grab some images from the internet or generate them from AI and put them in the `public` folder. You can use these images in your mock data.

You may copy some data from https://dummyjson.com/docs/products

(Note: take care to note differences in the structure of the data from our actual backend (id vs _id, etc.))

Or you may use this example data:

### Example: Products Data (`/src/mocks/products.json`)
```json
[
  {
    "name": "Espresso",
    "description": "A strong and concentrated coffee beverage.",
    "price": 2.5,
    "category": "Beverage",
    "stock": 10,
    "imageUrl": "/sample-images/espresso.jpg",
    "_id": 0
  },
  {
    "name": "Cappuccino",
    "description": "An Italian coffee drink that is traditionally prepared with equal parts espresso, steamed milk, and milk foam.",
    "price": 3.5,
    "category": "Beverage",
    "stock": 5,
    "imageUrl": "/sample-images/cappuccino.jpg",
    "_id": 1
  },
  {
    "name": "Croissant",
    "description": "A buttery, flaky, viennoiserie pastry named for its crescent shape.",
    "price": 2,
    "category": "Food",
    "stock": 8,
    "imageUrl": "/sample-images/croissant.jpg",
    "_id": 2
  },
  {
    "name": "Muffin",
    "description": "A small, sweet baked good that is typically made with ingredients such as flour, sugar, eggs, and butter.",
    "price": 2.5,
    "category": "Food",
    "stock": 6,
    "imageUrl": "/sample-images/muffin.jpg",
    "_id": 3
  }
]
```
### Example Cart data

`/src/mocks/cart.json`

```json
{
    "_id": "1",
    "products": [
        {
          "name": "Espresso",
          "description": "A strong and concentrated coffee beverage.",
          "price": 2.5,
          "category": "Beverage",
          "stock": 10,
          "imageUrl": "/sample-images/espresso.jpg",
          "_id": 0
        },
        {
          "name": "Croissant",
          "description": "A buttery, flaky, viennoiserie pastry named for its crescent shape.",
          "price": 2,
          "category": "Food",
          "stock": 8,
          "imageUrl": "/sample-images/croissant.jpg",
          "_id": 2
        },
        {
          "name": "Muffin",
          "description": "A small, sweet baked good that is typically made with ingredients such as flour, sugar, eggs, and butter.",
          "price": 2.5,
          "category": "Food",
          "stock": 6,
          "imageUrl": "/sample-images/muffin.jpg",
          "_id": 3
        }
    ],
    "user": "1"
}
```

Remember to git commit with a message like: "Add basic pages for the Coffee Shop frontend."

### Example: Home (Splash) Page (`src/pages/index.jsx`)
```jsx
export default function Home() {
  return (
    <div>
      <h1>Welcome to the Coffee Shop!</h1>
    </div>
  );
}
```

### Example 2: Product Page (`src/pages/products/[id].jsx`)
```jsx
import { useRouter } from 'next/router';

export default function ProductPage() {
  // For pages with dynamic routes, you can use the useRouter hook to get the route params
  const router = useRouter();
  const { id } = router.query; // Get 'id' from the route params
  return (
    <div>
      <h1>Product Page for product &#35; { id }</h1>
    </div>
  );
}
```

### Example 3: Products Page (`src/pages/products/index.jsx`)
```jsx
export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
    </div>
  );
}
```

---

## **2. Splash Page (Home Page)**
### **Step 1**: Create the Layout
In `index.jsx`, build a splash page that includes the following:
- **Header**
- **Hero Image with Call-to-Action (CTA) Button**
- **Brief Description**
- **Footer**

### **Step 2**: Break  Spash Page Into Components
- Split the page into components, such as `Header`, `Footer`, `HeroSection`, and `Button`.
- Verify each component works in Storybook.
- Create a new story for each new component.
- Remember, your Button component should accept a `label` prop.
- If you like, you may have a prop that accepts a handleClick function.

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

### **Step 4**: Verify in Storybook

Verify that your Button still works in Storybook.

**git commit** with a message like "Add Button component with click handling."
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

### **Step 3**: Verify in Storybook
- Verify your story for `SignupForm` with a mock button label.

git commit with a message like "Add SignupForm component."

---

# Day One Setup for Coffee Shop Frontend

## Objective

Set up a solid foundation for the project by creating a Next.js app, integrating Storybook for component development, and building stubs for your components. Follow an incremental approach to ensure all components work as expected before moving forward.

---

## **1. Setup Next.js and Repository**

1. **Create a New Next.js App**:

   ```bash
   npx create-next-app@latest coffee-shop-frontend
   cd coffee-shop-frontend
   ```

   - During setup, select **Use Tailwind CSS** and **Use Pages Router** options.

2. **Initialize a Git Repository**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Test Application**:

   ```bash
   npm run dev
   ```

   Verify the app runs at [http://localhost:3000](http://localhost:3000).

4. **Update your README.md file.**

- delete the default content.
- add an outline of what you plan to do or the template provided in the assignment.
- commit your changes.

```markdown
# Coffee Shop Frontend

This is a project to build a frontend for a coffee shop. The project will include a variety of components and features to create a user-friendly experience for customers.

Live link: ...

## Technologies

- React
- Next.js
- Tailwind CSS
- Storybook
- DaisyUI
- Vercel
- ...

## Components

- [x] Navbar
- [x] Footer
- [x] Button
- [ ] Loader
- [ ] Toast
- [x] ProductCard
- [ ] CartItem
- [x] CartSummary

## Features
- [x] Tailwind CSS with DaisyUI integration.
- [x] Storybook for component development.
- [x] Component stubs for all components.

## Setup
If you would like to try this project out or contribute, follow these steps:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the app with `npm run dev`.
4. Open Storybook with `npm run storybook`.

## Contributing
If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes.
4. Test your changes.
5. Push your changes to your fork.
6. Create a pull request.

## Screenshots

Add screenshots of the app here.

## Attribution

Give credit to any resources or inspiration you used in this project.

- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Storybook](https://storybook.js.org/)



```

5. Update index.js file.

- delete the default content.
- add a simple heading to test the app.

```jsx
export default function Home() {
  return <h1>Coffee Shop Frontend Splash Page</h1>;
}
```

6. Deploy to Vercel.

It's a good idea to deploy your app to Vercel right away to ensure it works as expected in a production environment.

- Push your code to GitHub.
- Create a new project on Vercel.
- Import your project from GitHub.
- Deploy your project.
- Note: you may want to have a special branch for deployment, such as `main` or `production`.
- Note: Although you have no Environment Variables yet, remember to update your Environment Variables in Vercel to match your `.env.local` file as you add them.
- Check your deployed app to ensure it works as expected after each commit to see if you can catch any bugs as they are made.

7. Create a new branch for your work today.

```bash
  git switch -c setup-components
```
---

## **2. Setup Storybook**

1. **Install Storybook**:

   ```bash
   npx storybook@latest init
   ```

2. **Run Storybook**:

Storybook may will already be running after the installation. If not, you can start it with:

   ```bash
   npm run storybook
   ```

   Verify Storybook runs at [http://localhost:6006](http://localhost:6006).

    - Note: Delete the default content in `styles/globals.css`.
    Add or keep Tailwind CSS to `styles/globals.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

- Add your global CSS to storybook. In the file `.storybook/previews`, import the Tailwind CSS file:

     ```javascript
     /** @type { import('@storybook/react').Preview } */
     import '../src/styles/globals.css'; // add this line
     ...
     ```

3. **Add a Button Component to Test**:

   - First, delete the `stories` directory in the `src` folder.

   - Next, create a simple button component to test in Storybook:

     ```javascript
     // components/Button.js
      import PropTypes from 'prop-types';
      export default function Button({ label }) {
        return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{label}</button>;
      }
      Button.propTypes = {
        label: PropTypes.string.isRequired,
      };
     ```

   - Open Storybook's UI by running:

     ```bash
     npm run storybook
     ```

   - In Storybook, create a new story:
     - Navigate to the Storybook interface.
     - Use the UI options to create a story for the `Button` component.

   - Test the button in the Storybook interface to ensure it renders correctly.
   - Open Storybook's UI by running:

     ```bash
     npm run storybook
     ```

   - In Storybook, create a new story:
     - Navigate to the Storybook interface.
     - Use the UI options to create a story for the `Button` component.

   - Run Storybook and confirm the button renders correctly.

---

## **3. Create Skeleton for All Components**

1. **Create Components**:
   - Create files for the following components:
     - Navbar.jsx
     - Footer.jsx
     - Button.jsx
     - Loader.jsx
     - Toast.jsx
     - ProductCard.jsx
     - CartItem.jsx
     - CartSummary.jsx

2. **Add Skeleton Code and Stories**:
   - Do not complete the components yet; add a simple "Hello World" message to each component. You will have the opportunity to add more functionality later.
   - Example for `Navbar`:

     ```javascript
     // components/Navbar.js
     import PropTypes from 'prop-types';
     export default function Navbar({title}) {
       return <div className="navbar">Navbar Component {title}</div>;
     }
     Navbar.propTypes = {
       // Add prop-types here
        title: PropTypes.string.isRequired,
     };
     ```

   - Make use of snippets or copy and paste boilerplate code to speed up the process.
   - Test the components in Storybook to ensure they render correctly.
   - Click the + sign in the Storybook interface to add a new story.
   - Don't forget to click update story in storybook to save the changes, if you update controls (props).
   - Commit often to track your progress.

3. **Test Each Component in Storybook**:
   Verify all components render correctly in Storybook.

4. **Update README.md**:
   - Document the components created and the progress made.
   - Example:

     ```markdown
     # Coffee Shop Frontend

     ## Components
     - Navbar
     - Footer
     - Button
     - Loader
     - Toast
     - ProductCard
     - CartItem
     - CartSummary
     ```

     Add one screenshot of the Storybook interface to your README.md. 
---


## **5. Setup DaisyUI**

1. **Install DaisyUI**:

   ```bash
   npm install daisyui
   ```

2. **Configure DaisyUI**:
   - Add DaisyUI to `tailwind.config.js`:

     ```javascript
     module.exports = {
       content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
       theme: {
         extend: {},
       },
       plugins: [require("daisyui")],
     };
     ```

3. **Test DaisyUI**:
   - Add a sample component:

     ```javascript
     export default function TestButton() {
       return <button className="btn btn-primary">Test DaisyUI</button>;
     }
     ```

   - Verify the button renders with DaisyUI styling.

---

## **6. Setup Custom DaisyUI Theme**

1. **Use DaisyUI Theme Generator**:
   - Visit the [DaisyUI Theme Generator](https://daisyui.com/theme-generator/).
   - Customize the theme colors to align with your coffee shop branding.
   - Copy the generated theme configuration.

2. **Configure the Custom Theme**:
   - Update `tailwind.config.js` with the copied theme configuration:

     ```javascript
     module.exports = {
       plugins: [require("daisyui")],
       daisyui: {
         themes: [
           {
             coffeeShop: {
               primary: "#6B4F4F", // Replace with your custom color
               secondary: "#FFD700", // Replace with your custom color
               accent: "#C0C0C0", // Replace with your custom color
               neutral: "#3D4451", // Replace with your custom color
               "base-100": "#FFFFFF", // Replace with your custom color
             },
           },
         ],
       },
     };
     ```

3. **Test the Theme**:
   - Apply the theme in your app:

     ```javascript
     // pages/_app.js
     import '../styles/globals.css';

     export default function MyApp({ Component, pageProps }) {
       return (
         <div data-theme="coffeeShop">
           <Component {...pageProps} />
         </div>
       );
     }
     ```

   - Verify the custom theme is applied and renders as expected.

1. **Configure Custom Theme**:
   - Update `tailwind.config.js`:

     ```javascript
     module.exports = {
       plugins: [require("daisyui")],
       daisyui: {
         themes: [
           {
             coffeeShop: {
               primary: "#6B4F4F",
               secondary: "#FFD700",
               accent: "#C0C0C0",
               neutral: "#3D4451",
               "base-100": "#FFFFFF",
             },
           },
         ],
       },
     };
     ```

2. **Test Theme**:
   - Apply the theme in your app:

     ```javascript
     // pages/_app.js
     import '../styles/globals.css';

     export default function MyApp({ Component, pageProps }) {
       return (
         <div data-theme="coffeeShop">
           <Component {...pageProps} />
         </div>
       );
     }
     ```

   - Verify the theme is applied.

---

## **7. Create Custom CSS Rule for a Component**

1. **Add Custom CSS**:
   - Example for `Navbar`:

     ```css
     /* styles/navbar.css */
     .navbar {
       background-color: #6b4f4f;
       color: white;
     }
     ```

2. **Import CSS**:

   ```javascript
   // components/Navbar.js
   import '../styles/navbar.css';

   export default function Navbar() {
       return <div className="navbar">Navbar Component</div>;
   }
   ```

3. **Test Custom CSS**:
   - Verify the custom style is applied to the `Navbar` component.

---

## **8. Test and Create README.md**

1. **Test Application**:
   - Ensure all components work in Storybook and the app.
   - Verify the backend connection and DaisyUI integration.

2. **Create `README.md`**:
   - Document the setup steps, dependencies, and testing process.
   - Example:

     ```markdown
     # Coffee Shop Frontend

     ## Setup
     1. Clone the repository.
     2. Run `npm install` to install dependencies.
     3. Start the app with `npm run dev`.

     ## Features
     - Tailwind CSS with DaisyUI integration.
     - Storybook for component development.
     - Backend connection with a sample HelloBackend component.
     ```

## **9. Commit and Push Changes**

Make sure to commit your changes and push them to GitHub. Then check to see if your app is deployed on Vercel. You may have accidentally added something that causes an error in production, so it's good to check after each commit.

Then create a pull request to merge your changes into the main branch.

```bash
git add .
git commit -m "Setup components and backend connection"
git push origin setup-components
```

On GitHub, create a pull request to merge your changes into the main branch. Then click the "Merge pull request" button to merge your changes.

Finally, on your local machine, switch back to the main branch and pull the changes:

```bash
git switch main
git pull
```

You may safely delete the `setup-components` branch now that the changes have been merged into the main branch. Or you may keep it for future reference.

```bash
git branch -d setup-components
```

Tomorrow, you will branch again from the main branch to continue working on the project.

## **10. Submission**

Submit the GitHub repository link for the project. Be sure to include the link to the deployed app on Vercel.

If your deploy stops working, take a screenshot of the error message on Vercel and submit it with your repository link. Give a brief description of the work that you completed after the deploy stopped working.

---

