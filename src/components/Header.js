import PropTypes from 'prop-types';

export default function Header() {
    return (
    
    <div className="text-black text-5xl bg-slate-400 opacity-70 drop-shadow-2xl mb-7 mx-auto font-mono font-bold 
    text-stroke-thick flex justify-around items-center w-full">COFFEE, TEA, SNACK & READ!
    </div>

    )
}
Header.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
};