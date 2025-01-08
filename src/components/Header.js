import PropTypes from 'prop-types';

export default function Header({title}) {
    return <div className="navbar">Header Component {title}</div>;
}
Header.propTypes = {
  // Add prop-types here
    title: PropTypes.string.isRequired,
};