import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function SignupForm({ handleSignIn }) {
  return (
    <div className="card bg-base-100 flex-grow text-center max-w-sm">
      <div className="card-body flex justify-center">
        <form className="form-control text-yellow-500 mt-5 text-center font-sans text-l space-y-3">
        <label className="label">
          <span className='label-text block mb-2'>User Name</span>
          <input type="text" placeholder="user name" className="input input-bordered"/>
        </label>
        <label className="label">
          <span className='label-text block mb-2'>Email</span>
          <input type="email" placeholder="email" className="input input-bordered block max-w-full" />
        </label>
        <label className="label">
          <span className='label-text block mb-2'>Password</span>
          <input type="password" placeholder="create password" className="input input-bordered" />
        </label>
      <div className='form-control mb-3'>
        <Button label="Sign Up!"  className="btn btn-primary" handleClick={handleSignIn} />
      </div>
      </form>
    </div>
  </div>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};