import PropTypes from 'prop-types';
import Button from './Button';

export default function ProductCard({ product, addToCart, buttonLabel }) {
    return (
        <div className="grid grid-cols-1 ">
        <div className="card bg-base-100 text-center font-sans justify-center mx-auto w-44">
            <figure className='h-35'>
            <img src={product.imageUrl} alt={product.name} className='object-cover w-full'/>
            </figure>
            <h3 className='card-title justify-center font-bold'>{product.name}</h3>
            <p>{product.description}</p>
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