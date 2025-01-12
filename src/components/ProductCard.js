import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function ProductCard({ product, addToCart, buttonLabel }) {
    return (
        <div className="container card text-center font-sans justify-center mx-auto w-44">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
        <Button label={buttonLabel} handleClick={addToCart} />
    </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};