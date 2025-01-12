import PropTypes from 'prop-types';

export default function About({ title }) {
    return (
    <div className="card justify-stretch bg-base-200 mx-auto w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src="imgs/coffee-books.jpg" alt="image" className="rounded-xl" />
      </figure>
      <div className="card-body justify-stretch items-center text-center">
        
        <p className='text-yellow-200 font-mono'><h1 className='font-semibold text-yellow-600'>'COFFEE, TEA, SNACK & READ'</h1> is an app for coffee, tea and book 
          lovers alike with the option to add in a delicious snack! Sign Up and Login for access! Our products range from fine teas from France, 
          organic fair trade coffee beans from Mexico, books about coffee and more! </p>
      </div>
    </div>
  );
}
About.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
};