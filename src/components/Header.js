import PropTypes from 'prop-types';

export default function Header() {
    return <div className="text-white text-5xl mt-5 font-mono font-bold text-stroke-thin flex justify-around items-center w-full">COFFEE OR TEA, SNACK & READ!</div>;
}
Header.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
};