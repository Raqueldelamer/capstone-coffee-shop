import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function SignupForm({ buttonLabel }) {
  return (
    <form className="form text-yellow-500 mt-5 text-center font-sans text-l space-x-6 justify-around">
      <input type="text" placeholder="User Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Create Password" />
      <Button label="Submit" handleClick={()=>{console.log("clicked sign up")}}/>
    </form>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};