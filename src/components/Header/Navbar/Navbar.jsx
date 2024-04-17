import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('User logged out successfully')
            })
            .catch(error => console.error(error))
    }


    const navLinks = <>
        <NavLink className={({ isActive }) => isActive ? 'underline mr-4' : 'mr-4'} to='/'>Home</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'underline mr-4' : 'mr-4'} to='/profile'>Update Profile</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'underline mr-4' : 'mr-4'} to='/anything'>Anything</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 mb-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white font-poppins rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl font-poppins lg:text-4xl bg-black text-white px-2">Tranquil Haven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl bg-black text-white font-poppins menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2 lg:gap-10">

                    <div className="flex items-center gap-4">
                        {
                            user ? <>
                                <div data-tip={user.displayName} className="tooltip tooltip-left avatar mr-8">
                                    <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <a onClick={handleLogOut} className="btn bg-black text-white border-none text-sm font-poppins w-14 lg:w-20">Log out</a>
                            </>
                                :
                                <Link to="/login" className="btn bg-black text-white border-none text-xl font-poppins w-14 lg:w-20">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;