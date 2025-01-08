import PropTypes from 'prop-types';

export default function Header() {
    return <div className="text-yellow-200 text-5xl bg-blend-luminosity drop-shadow-xl mb-5 mt-10 mx-auto font-mono font-bold text-stroke-thin flex justify-around items-center w-full">COFFEE OR TEA, SNACK & READ!</div>;
}
Header.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
};