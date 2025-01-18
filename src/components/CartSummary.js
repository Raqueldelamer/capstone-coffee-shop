export default function CartSummary({ subtotal, tax, total }) {
    return (
    <div className="bg-base-100 container justify-center p-6 mx-5 shadow-md rounded-lg">
            <div className="text-2xl font-mono font-semibold text-center mt-2 mb-4">
            <h2>Order Summary</h2>
        </div>
        <table className="table text-xl font-mono">
            <tbody>
            <tr>
                <td>Sub total</td>
                <td>${subtotal}</td>
            </tr>
            <tr>
                <td>Sales tax (10%)</td>
                <td>${tax}</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td>Free</td>
            </tr>
            </tbody>
            <tfoot className="text-yellow-200 text-2xl font-mono">
            <tr >
                <td>Total</td>
                <td>${total}</td>
            </tr>
            </tfoot>
        </table>
    </div>
    );
}