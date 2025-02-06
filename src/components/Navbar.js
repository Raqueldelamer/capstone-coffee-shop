
import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from './Icon';
import Book from './Book';
import CartIcon from './CartIcon';

export default function Navbar({ menuItems }) {
  return (
    <div className="flex items-center text-wrap ml-4 mt-1">
      <Icon />
      <p className="text-xl mx-2">+</p>
      <Book />
      <div className="navbar flex text-center font-sans text-xl space-x-5 px-3 justify-start w-full">
        <div><Link href="/" className="hover:text-yellow-200">{menuItems[0]}</Link></div>
        <div><Link href="/login" className="hover:text-yellow-200">{menuItems[1]}</Link></div>
        
        {/* Hover dropdown for the Products link */}
        <div className="flex-grow"></div>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" text-xl">
            <Link href="/products" className="hover:text-yellow-200">{menuItems[2]}</Link>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a href="/admin/products/create">Create Product</a></li>
            <li><a href="/admin/products">Delete Product</a></li>
          </ul>
        </div>

        {/* Cart Icon and Link to Cart.js */}
        <div className="flex space-x-1 ml-2 mr-4">
          <Link href="/cart" className="flex items-center justify-end text-xl hover:text-yellow-200">
            <CartIcon />
            <span>{menuItems[3]}</span>
          </Link>
        </div>

        <div><Link href="/checkout" className="hover:text-yellow-200 text-xl">{menuItems[4]}</Link></div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
};