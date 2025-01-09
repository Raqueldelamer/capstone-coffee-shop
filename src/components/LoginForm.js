// src/components/LoginForm.jsx
import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function LoginForm({ buttonLabel, handleLogin }) {
    return (
        
    <form className="form text-yellow-500 mt-5 text-center font-sans text-l space-x-3 justify-around">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Button label="LOGIN" handleClick={handleLogin}/>
    </form>
    );
}

LoginForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
};