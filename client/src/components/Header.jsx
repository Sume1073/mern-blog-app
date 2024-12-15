import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const [searchTerm, setSearchTerm] = useState('');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  // Resize handler to close the search bar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSearchOpen(false); // Close search bar on larger screens
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='border-b-2 bg-white dark:bg-gray-800'>
      {/* Branding */}
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white text-gray-800 ml-4'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sumedha's
        </span>
        Blog
      </Link>

      {/* Search Input */}
      <form onSubmit={handleSubmit} className='relative hidden lg:flex w-full max-w-md'>
        <TextInput
          type='text'
          placeholder='Search articles, projects...'
          className='w-full px-5 py-2.5 rounded-full text-gray-900 bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-300 shadow-sm'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type='submit'
          className='absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full shadow transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600'
        >
          <AiOutlineSearch className='text-white text-lg' />
        </button>
      </form>

      {/* Mobile Search Button */}
      <Button
        className='w-12 h-10 lg:hidden'
        color='gray'
        pill
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <AiOutlineSearch />
      </Button>

      {/* Mobile Search Input */}
      {isSearchOpen && (
        <form onSubmit={handleSubmit} className='relative flex w-full mt-2 px-4'>
          <TextInput
            type='text'
            placeholder='Search articles, projects...'
            className='w-full px-5 py-2.5 rounded-full text-gray-900 bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-300 shadow-sm'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type='submit'
            className='absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full shadow transition-all duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600'
          >
            <AiOutlineSearch className='text-white text-lg' />
          </button>
        </form>
      )}

      {/* Right-side Actions */}
      <div className='flex items-center gap-2 md:order-2'>
        {/* Theme Toggle */}
        <Button
          className='group items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 focus:ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 rounded-full focus:ring-2 w-12 h-10'
          onClick={() => dispatch(toggleTheme())}
        >
          <span className='flex items-center justify-center w-full h-full'>
            {theme === 'light' ? (
              <FaMoon className='text-lg text-indigo-500 dark:text-indigo-300' />
            ) : (
              <FaSun className='text-lg text-amber-400' />
            )}
          </span>
        </Button>

        {/* User Dropdown */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <button
              type='button'
              className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ml-4 mt-2'
            >
              <span className='items-center flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full rounded-md text-sm px-4 py-2 border border-transparent'>
                Sign in
              </span>
            </button>
          </Link>
        )}
      </div>

      {/* Hamburger Menu and Navbar Links */}
      <Navbar.Toggle
        className='lg:hidden'
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      />
      <Navbar.Collapse
        className={`${isNavbarOpen ? 'block' : 'hidden'} lg:flex`}
      >
        <Navbar.Link
          active={path === '/'}
          as={'div'}
          className={`${
            path === '/'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-800 dark:text-gray-300'
          } hover:text-blue-600 dark:hover:text-blue-400 mx-4`}
        >
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === '/about'}
          as={'div'}
          className={`${
            path === '/about'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-800 dark:text-gray-300'
          } hover:text-blue-600 dark:hover:text-blue-400 mx-4`}
        >
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === '/projects'}
          as={'div'}
          className={`${
            path === '/projects'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-800 dark:text-gray-300'
          } hover:text-blue-600 dark:hover:text-blue-400 mx-4`}
        >
          <Link to='/projects'>Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
