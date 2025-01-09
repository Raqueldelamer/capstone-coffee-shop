// src/components/LoginForm.jsx
import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function LoginForm({ buttonLabel, handleLogin }) {
    return (
    <form className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Button label={buttonLabel} handleClick={handleLogin}/>
    </form>
    );
}

LoginForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
};