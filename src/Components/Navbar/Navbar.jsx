import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/shows.png'; 

function Navbar({ isLoggedIn, userName }) {
  return (
    <nav className="border-b-2 shadow-sm py-4">
      <div className="container mx-auto flex justify-around lg:justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          <img src={logoImg} alt="Your Logo" className="h-10" />
        </Link>
        <div className="space-x-4">
          <Link to="/shows" className="hover:underline">All Shows</Link>
          {isLoggedIn ? (
            <div className="relative group">
              <button className="group-hover:underline">
                <span className="mr-2">{userName}</span>
                <i className="fas fa-angle-down"></i>
              </button>
              <div className="absolute right-0 top-full hidden group-hover:block bg-white text-primary rounded shadow-md mt-2">
                <Link to="/account" className="block px-4 py-2">My Account</Link>
                <Link to="/logout" className="block px-4 py-2">Logout</Link>
              </div>
            </div>
          ) : (
            <Link to="/login" className="hover:underline">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.any,
  userName: PropTypes.any,
};

export default Navbar;
