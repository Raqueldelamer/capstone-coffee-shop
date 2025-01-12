import PropTypes from 'prop-types';

export default function About({ title }) {
    return (
    <div className="card justify-stretch bg-base-200 mx-auto w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src="imgs/coffee-books.jpg" alt="image" className="rounded-xl" />
      </figure>
      <div className="card-body justify-stretch items-center text-center">
        <h2 className="card-title text-3xl text-yellow-600">{title}</h2>
        <p className='text-yellow-200'>'COFFEE, TEA, SNACK & READ' is an app for coffee, tea and book 
          lovers with the option to add in a snack! Our products range from French quality teas, organic 
          fair trade coffee beans and books about coffee!</p>
      </div>
    </div>
  );
}
About.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
};