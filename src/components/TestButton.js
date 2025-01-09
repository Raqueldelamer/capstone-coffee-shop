export default function Button({ label, handleClick }) {
    return (
        <button onClick={handleClick} className="btn btn-primary border border-black mt-20">
            {label}
        </button>
    );
}