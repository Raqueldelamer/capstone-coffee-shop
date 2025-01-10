// components/Button.js
import PropTypes from 'prop-types';
export default function Button({ label, handleClick }) {
    return <button onClick={handleClick} className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{label}</button>;
}
Button.propTypes = {
    label: PropTypes.string.isRequired,
};