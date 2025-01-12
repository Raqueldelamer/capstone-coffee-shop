// src/components/LoginForm.jsx
import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function LoginForm({ buttonLabel, handleLogin }) {
    return (
    <div className="card bg-base-100 mx-auto justify-center flex-grow max-w-sm">
        <div className="card-body justify-center">   
        <form className="form-control text-yellow-500 mt-5 text-center font-sans text-l space-y-3">
        <label className='label'>
            <span className='label-text block mb-2'>Email</span>
            <input type="email" placeholder="email" className="input input-bordered" />
            </label>
            <label className="label">
            <span className='label-text block mb-2'>Password</span>
            <input type="password" placeholder="password" className="input input-bordered " />
            </label>
            <label className="label form-control">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            <div className='form-control mb-3'>
            <Button label="LOGIN" handleClick={handleLogin}/>
            </div>
        </form>
        </div>
    </div>
    );
}

LoginForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
};