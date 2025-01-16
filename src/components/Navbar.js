
import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from './Icon';
import Book from './Book';
import CartIcon from './CartIcon';
// import { FaSignInAlt, FaCoffee } from "react-icons/fa";

export default function Navbar({ title, menuItems }) {
    return (
      <div className="flex items-center ml-4 mt-1">
        <Icon />
        <p className='text-xl mx-2'>+</p>
        <Book />
          <div className="navbar flex text-center font-sans text-xl space-x-4 px-3 justify-start">
          <div><Link href="/" className='hover:text-yellow-200'>{menuItems[0]}</Link></div>
          <div><Link href="/login" className='hover:text-yellow-200'>{menuItems[1]}</Link></div>
          <div><Link href="/products" className='hover:text-yellow-200'>{menuItems[2]}</Link></div></div>
          {/* Cart Icon and Link to Cart.js */}
          <div className='flex justify-end space-x-1 ml-2 mr-4'><Link href="/cart" className='flex items-center text-xl hover:text-yellow-200'>
          <CartIcon /><span>{menuItems[3]}</span></Link></div>
          <div><Link href="/checkout" className='hover:text-yellow-200 text-xl'>{menuItems[4]}</Link></div>
          </div>
      
    )
          
}
Navbar.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired,
};