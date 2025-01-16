import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button';

function checkPassword(password) {
  if (password.length > 8) {
    return true;
  } else {
    return false;
  }
}
const isEmailValid = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

export default function SignupForm({ buttonLabel, handleSignUp }) {

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [error, setError] = useState("");


  function handleSubmit(e) {
    e.preventDefault();

    if (!emailIsValid || !passwordIsValid) {
      setError('Fix errors before submitting.');
      return;
    }
    // call the handleSignUp function as a prop
    handleSignUp({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });

    // Reset fields after submit
    setNameValue("");
    setEmailValue("");
    setPasswordValue("");
    setEmailIsValid(false);
    setPasswordIsValid(false);
  }

  function onEmailChange(event) {
    const newEmailValue = event.target.value;
    setEmailValue(newEmailValue);
    console.log(event.target.value);

    if (isEmailValid(newEmailValue)) {
      setEmailIsValid(true);
      setError('');
    } else {
      setEmailIsValid(false);
      setError("Invalid email format");
    }
  }
  
  return (
    <div className="card bg-base-100 mx-auto justify-center flex-grow text-center max-w-sm">
      <div className="card-body justify-center">
        <form className="form-control text-yellow-500 mt-5 text-center font-sans text-l space-y-3"
        onSubmit={handleSubmit} >
        <label className="label">
          <span className='label-text block mb-2'>User</span>
          <input type="text" 
          placeholder="user name" 
          className="input input-bordered"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)} />
        </label>
        <label className="label">
          <span className='label-text block mb-2'>Email</span>
          <input type="email" className="input input-bordered block max-w-full"
          placeholder="email"
          onChange={onEmailChange} />
        </label>
        {error && <p className="text-xs text-red-400">{error}</p>}
        
        <label className="label">
          <span className='label-text block mb-2'>Password</span>
          <input type="password" 
          placeholder="create password" 
          className="input input-bordered"
          value={passwordValue}
          onChange={(e) => {
            const newPasswordValue = e.target.value;
            setPasswordValue(newPasswordValue);
            if (checkPassword(newPasswordValue)) {
              setPasswordIsValid(true);
            } else {
              setPasswordIsValid(false);
            }
          }} />
      </label>
      <div className={passwordIsValid ? "invisible text-xs" : "text-xs text-red-400"} >
        Password must be at least 8 characters long.
      </div>

      <div className='form-control mb-3'>
        <Button label="Submit"  className="btn btn-primary" handleClick={handleSubmit} />
      </div>
      </form>
    </div>
  </div>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};