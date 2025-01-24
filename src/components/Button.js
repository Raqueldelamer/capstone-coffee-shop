// components/Button.js
import PropTypes from 'prop-types';

export default function Button({ label, handleClick }) {
    return (
        <button 
            type="submit" 
            onClick={handleClick} 
            className="btn btn-primary border border-black text-black font-bold py-2 px-4 rounded">
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};