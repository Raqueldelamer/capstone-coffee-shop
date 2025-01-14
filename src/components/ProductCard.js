import PropTypes from 'prop-types';
import Button from './Button';

export default function ProductCard({ product, addToCart, buttonLabel }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-20">
        <div className="card bg-base-100 text-wrap text-center font-mono justify-items-center w-44">
            <figure className='h-35'>
            <img src={product.imageUrl} alt={product.name} className='object-cover w-full'/>
            </figure>
            <h3 className='card-title justify-center font-bold'>{product.name}</h3>
            <p className="text-sm text-balance">{product.description}</p>
            <p>${product.price}</p>
        <Button label={buttonLabel} handleClick={addToCart} />
    </div>
    </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    buttonLabel: PropTypes.string.isRequired,
};