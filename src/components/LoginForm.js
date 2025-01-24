// src/components/LoginForm.jsx
import PropTypes from "prop-types"; 
import Button from "@/components/Button";

export default function LoginForm({  buttonLabel, handleLogin }) {
    function handleSubmit(event) {
    event.preventDefault();

    console.log(event);

    let email = event.target.elements.email.value; 
    let password = event.target.elements.password.value;

    console.log()
    console.log("Email:", email);

    console.log("Password:", password);

    //email = event.target.elements.email.value; 

    handleLogin(email, password);

    }

    return (
    <div className="card bg-base-100 mx-auto justify-center flex-grow max-w-sm">
        <div className="card-body justify-center">
        <form
            onSubmit={handleSubmit}
            className="form-control text-yellow-500 mt-5 text-center font-sans text-l space-y-3">
            <label className="label">
            <span className="label-text block mb-2">Email</span>
            <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required />
            </label>

            <label className="label">
            <span className="label-text block mb-2">Password</span>
            <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required />
            </label>

            <label className="label form-control">
            <a href="#" className="label-text-alt link link-hover">
                Forgot password?
            </a>
            </label>
            <div className="form-control mb-3">
            {/* <Button label="LOGIN" handleClick={handleSubmit} /> */}
            <Button label="LOGIN" />
            </div>
        </form>
        </div>
    </div>
    ) ;
}

LoginForm.propTypes = {
    // buttonLabel: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
};
