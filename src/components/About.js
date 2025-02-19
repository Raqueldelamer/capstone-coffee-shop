import PropTypes from 'prop-types';


export default function About({ title, handleCtaClick }) {
    return (
    <div className="card justify-stretch bg-base-200 mx-auto w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src="imgs/coffee-books.jpg" alt="image" className="rounded-xl" />
      </figure>
      <div className="card-body justify-stretch items-center text-center">
        <div className='text-yellow-200 text-l font-mono'><h1 className='font-semibold text-xl text-stretch text-yellow-600'>::COFFEE, TEA, & READ::</h1> 
          is an app for coffee, tea and book lovers alike with the option to purchase a delicious snack. Sign Up and Login for access with the opportunity to 
          sell your own coffee merchandise with our Create Product feature! Our products range from fine teas from France, organic fair trade coffee beans from 
          Mexico, to chocolate covered Espresso beans, books about coffee and tea, and more! </div>
      </div>
    </div>
  );
}
About.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
};