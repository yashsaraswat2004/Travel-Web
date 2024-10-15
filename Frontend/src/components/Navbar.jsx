import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);  // Store user data
  const [anchorEl, setAnchorEl] = useState(null);  // For controlling the dropdown
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // Fetch user info
  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get('http://localhost:5070/api/user/profile', {
          headers: {
            'Authorization': `Bearer ${jwt}` 
          }
        });
        if (response) {
          setUser(response.data);
        }
      } catch (error) {
        setUser(null);
        Swal.fire("Internal navbar Server Error", "", "error");
        console.log("internal navbar server error", error);
      }
    };
    getUserById();
  }, []);

  // Handle avatar click to show the dropdown
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the dropdown
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/')
    setUser(null);
  };

  return (
    <div className="flex justify-between items-center h-[5rem] max-w-full px-4 py-4 font-Montserrat cursor-pointer shadow-lg md:px-10">
<<<<<<< HEAD
      <div className="flex items-center gap-4">
        <img src="logo.svg" alt="logo" className="w-[7.875rem] h-[3.2rem]" />
=======
      <div className="flex items-center gap-4 ">
        <Link to="/">
          <img src="logo.svg" alt="logo" className="w-[7.875rem] h-[3.2rem]" />
        </Link>
>>>>>>> 5bdee712672373fc18fdbf0978bc36c4359d9a95
      </div>

      {/* Search bar for larger screens */}
      <div className="hidden md:flex border border-gray-300 shadow-lg w-[37.5rem] h-[3.125rem] rounded-full mt-2 justify-between items-center px-6 bg-white transition duration-300 hover:shadow-xl">
        <div className="w-[15.1875rem] h-[2.6875rem] m-0 border-gray-300 flex ">
          <input
            type="text"
            placeholder="Search Destinations"
            className="w-full h-full rounded-sm px-4 focus:outline-none transition duration-200 border-gray-300 border-r-2"
          />
        </div>

        <div className="relative flex items-center rounded-sm focus:outline-none px-5 py-2 transition duration-200 w-[12.3125rem] h-[2.375rem] bg-white">
          <select
            name="No. of Days"
            id="No. of Days"
            className="h-full appearance-none rounded-sm focus:outline-none pl-2 pr-8 cursor-pointer bg-white border-r-2"
          >
            <option value="" disabled selected>
              Select Days
            </option>
            <option value="1">1 Day</option>
            <option value="2">2 Days</option>
            <option value="3">3 Days</option>
            <option value="4">4 Days</option>
            <option value="5">5 Days</option>
          </select>
          <div className="absolute right-3">
            <IoIosArrowDown size={20} color="black" />
          </div>
        </div>

        <div className="w-[2.1875rem] h-[2.1875rem] ml-9 flex items-center justify-center bg-[#F18227] hover:bg-[#E0761F] rounded-full transition duration-300 transform hover:scale-105">
          <FaSearch size={18} color="white" />
        </div>
      </div>
<<<<<<< HEAD

      {/* Profile or Avatar */}
      <div className="flex items-center w-[7.5rem] h-[3.125rem] gap-4 border border-gray-300 rounded-full justify-center py-3 shadow-lg hover:shadow-xl bg-white transition duration-300">
        <IoMenuSharp size={30} color="black" onClick={() => setIsOpen(!isOpen)} />
        {user ? (
          <Avatar
            onClick={handleAvatarClick}
            sx={{ cursor: 'pointer', backgroundColor: '#F18227' }}
          >
            {user.firstName.charAt(0).toUpperCase()}
          </Avatar>
        ) : (
          <Link to="/signin">
            <CgProfile size={30} color="black" />
          </Link>
        )}
      </div>

      {/* Dropdown for Avatar */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-lg z-10 md:hidden">
          <div className="flex flex-col p-4">
            <input
              type="text"
              placeholder="Search Destinations"
              className="w-full h-10 rounded-sm px-4 mb-2 focus:outline-none border border-gray-300"
            />
            <select
              name="No. of Days"
              id="No. of Days"
              className="h-10 appearance-none bg-white rounded-sm focus:outline-none pl-2 pr-8 border-r-2 cursor-pointer mb-2"
            >
              <option value="" disabled selected>
                Select Days
              </option>
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4">4 Days</option>
              <option value="5">5 Days</option>
            </select>
            <div className="w-full h-10 flex items-center justify-center bg-custom-pink hover:bg-dark-pink rounded-full transition duration-300 transform hover:scale-105">
              <FaSearch size={18} color="white" />
            </div>
=======
      <div className="relative flex items-center w-[7.5rem] h-[3.125rem] gap-4 border border-gray-300 rounded-full justify-center py-3 shadow-lg hover:shadow-xl bg-white transition duration-300">
        <IoMenuSharp
          size={30}
          color="black"
          onClick={() => setIsOpen(!isOpen)}
        />
        {/* <Link to="/signin"> */}
        <CgProfile size={30} color="black" />
        {/* </Link> */}
        {isOpen && (
          <div className="absolute right-[-2.3rem] top-[4rem] w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <ul className="py-2">
              <Link to="/account">
                <li className="px-4 py-2 hover:bg-[#F18227] cursor-pointer">
                  Account
                </li>
              </Link>
              <Link to="/signin">
                <li className="px-4 py-2 hover:bg-[#F18227] cursor-pointer">
                  Login
                </li>
              </Link>
              <Link to="/wishlist">
                {" "}
                <li className="px-4 py-2 hover:bg-[#F18227] cursor-pointer">
                  Wishlist
                </li>
              </Link>
              <Link to="/orders">
                <li className="px-4 py-2 hover:bg-[#F18227] cursor-pointer">
                  Orders
                </li>
              </Link>
              <li className="px-4 py-2 hover:bg-[#F18227] cursor-pointer">
                Logout
              </li>
            </ul>
>>>>>>> 5bdee712672373fc18fdbf0978bc36c4359d9a95
          </div>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  jwt: PropTypes.string.isRequired,  // jwt is a required string prop
};

export default Navbar;
