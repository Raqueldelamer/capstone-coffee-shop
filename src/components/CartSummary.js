export default function CartSummary() {
    return (
    <div className="px-6 mx-5">
            <div className="text-2xl font-mono font-semibold text-center mt-2 mb-4">
            <h2>Order Summary</h2>
        </div>
        <table className="table text-xl font-mono">
            <tbody>
            <tr>
                <td>Sub total</td>
                <td>$___</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>$___</td>
            </tr>
            </tbody>
            <tfoot className="text-2xl font-mono">
            <tr >
                <td>Total</td>
                <td>$___</td>
            </tr>
            </tfoot>
        </table>
    </div>
    );
}