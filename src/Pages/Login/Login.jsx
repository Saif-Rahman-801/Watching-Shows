import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth/useAuth';
import { toast } from 'react-toastify';

const Login = () => {
  const { signInWithEmailAndPassword, signInWithGoogle } = useAuth();
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();

    // Extracting values from the form
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(email, password);
      toast.success("login successful");
      navigate("/")
      // You can optionally add additional logic or redirect the user
      console.log('User logged in successfully');
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error logging in:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Sign in with Google
      await signInWithGoogle();
      toast.success("login successful");
      navigate("/")
      // You can optionally add additional logic or redirect the user
      console.log('User logged in with Google successfully');
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error('Error logging in with Google:', error.message);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Login</h1>
          <p className='text-sm text-gray-400'>Welcome back to ShowLoader</p>
        </div>
        <form
          onSubmit={handleLogin}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
                <Link
                  to='/forgot-password'
                  className='text-sm text-rose-500 hover:underline'
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              Login
            </button>
          </div>
        </form>

        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>

        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />
          <button
            onClick={handleGoogleLogin}
            className='text-gray-600 hover:underline'
          >
            Continue with Google
          </button>
        </div>

        <p className='px-6 text-sm text-center text-gray-400'>
          Do not have an account?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Sign Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
