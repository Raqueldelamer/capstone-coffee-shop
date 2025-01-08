export default function Button({ label, handleClick }) {
    return (
        <button onClick={handleClick} className="btn btn-primary">
            {label}
        </button>
    );
}