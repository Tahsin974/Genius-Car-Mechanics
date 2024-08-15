import {useNavigate } from "react-router-dom";


import useAuth from "../../../Hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => {
    const {user,logOut,setUser,setError,setLoading} = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
        .then(() => {
            setUser();
            navigate('/')
          }).catch((error) => {
            setError(error)
          }).finally(()=> setLoading(false))
          ;
    }
    return (
        <div className="navbar bg-base-300 sticky top-0 z-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><HashLink to='/home'>Home</HashLink></li>
                        <li><HashLink to="/home#services">Services</HashLink></li>
                        <li><HashLink to="/home#experts">Experts</HashLink></li>
                        <li><HashLink to="/addservice">Add Service</HashLink></li>
                        <li><HashLink to="/manageservices">Manage Services</HashLink></li>
                        {user ? <li><button onClick={handleLogOut}>Log Out </button></li> : <li><HashLink to="/login">Login</HashLink></li>}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">Car Services</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    <li><HashLink to='/home'>Home</HashLink></li>
                    <li><HashLink to="/home#services">Services</HashLink></li>
                    <li><HashLink to="/home#experts">Experts</HashLink></li>
                    <li><HashLink to="/addservice">Add Service</HashLink></li>
                    <li><HashLink to="/manageservices">Manage Services</HashLink></li>
                    {user ?
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user.photoURL} />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                      <li>
                        <a className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><button onClick={handleLogOut}>Log Out </button></li>
                    </ul>
                  </div>
                    
                    
                    : <li><Link to="/login">Login</Link></li>}

                </ul>
            </div>

        </div>
    );
};

export default Header;