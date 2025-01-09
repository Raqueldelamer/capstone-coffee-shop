import PropTypes from 'prop-types';

export default function About() {
    return (
    <div className="sm:container md:mx-auto justify-center">
    <p>About content here</p>
    </div>
)
}
About.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
};