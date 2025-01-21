export default function CartSummary({ subtotal, tax, total }) {
    return (
    <div className="bg-base-100 shadow-md rounded-lg p-7 max-w-md w-full">
            <div className="text-2xl font-mono font-semibold text-center mt-2 mb-4">
            <h2 className="mb-3">Order Summary</h2>
        
        <table className="table text-l font-mono">
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
                <td>FREE</td>
            </tr>
            </tbody>
            <tfoot className="text-yellow-200 text-xl font-mono mb-4">
            <tr >
                <td>Total</td>
                <td>${total}</td>
            </tr>
            </tfoot>
        </table>
        </div>
    </div>
    );
}