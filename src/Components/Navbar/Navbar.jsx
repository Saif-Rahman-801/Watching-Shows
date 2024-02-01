import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/shows.png'; 
import useAuth from '../../hooks/useAuth/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      // Log out the user
      await logOut();
      // You can add additional logic or redirect the user after logout
      console.log('User logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <nav className="border-b-2 shadow-sm py-4">
      <div className="container mx-auto flex justify-around items-center">
        <Link to="/" className="text-lg font-bold">
          <img src={logoImg} alt="Your Logo" className="h-10" />
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">All Shows</Link>
          {user ? (
            <>
              <Link to="/profile" className="hover:underline">Profile</Link>
              <button onClick={handleLogout} className="hover:underline">Logout</button>
            </>
          ) : (
            <Link to="/login" className="hover:underline">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}



export default Navbar;
