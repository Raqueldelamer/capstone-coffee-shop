// components/Navbar.js
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Navbar({ title, menuItems }) {
    return <div className="navbar text-center font-sans text-xl space-x-8 px-2 justify-end">
          <div><Link href="/" className='hover:text-yellow-200'>{menuItems[0]}</Link></div>
          <div><Link href="/login" className='hover:text-yellow-200'>{menuItems[1]}</Link></div>
          <div><Link href="/products" className='hover:text-yellow-200'>{menuItems[2]}</Link></div>
          <div><Link href="/cart" className='hover:text-yellow-200'>{menuItems[3]}</Link></div>
          <div><Link href="/checkout" className='hover:text-yellow-200'>{menuItems[4]}</Link></div>
          </div>
}
Navbar.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired,
};