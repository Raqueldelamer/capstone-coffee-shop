import PropTypes from 'prop-types';
import Button from '@/components/Button';

export default function ProductCard({ product }) {
    return (
        <div className="card container text-center font-sans justify-stretch mt-40 mx-60 w-60">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
        <Button label="Add to Cart"/>
    </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};