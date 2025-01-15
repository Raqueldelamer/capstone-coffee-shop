import PropTypes from 'prop-types';
import Button from './Button';

export default function ProductCard({ product, addToCart, buttonLabel }) {
    return (
        <div className="grid grid-cols-1 gap-4 ">
        <div className="card bg-base-300 px-2 pt-3 text-center font-mono mt-2 mb-8 justify-items-center w-48 max-h-72">
            <figure className='h-auto'>
            <img src={product.imageUrl} alt={product.name} className='w-full'/>
            </figure>
            <h3 className='card-title justify-center text-base'>{product.name}</h3>
            <p className="text-xs">{product.description}</p>
            <p>${product.price}</p>
        <Button label={buttonLabel} handleClick={addToCart}  />
    </div>
    </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    buttonLabel: PropTypes.string.isRequired,
};