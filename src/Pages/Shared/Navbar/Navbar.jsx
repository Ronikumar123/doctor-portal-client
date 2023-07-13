import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import teeth from '../../../assets/icons/teeth.svg';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const {user, logOut } = useContext(AuthContext);

    const handleLogOut =() =>{
        logOut()
        .then(() =>{})
        .catch(err => console.log(err));
    }
    const menuItems = <React.Fragment>
        <li className='hover:bg-cyan-200 rounded-sm hover:text-orange-300 font-bold italic'><Link to="/">Home</Link></li>
        <li className='hover:bg-cyan-200 rounded-sm hover:text-orange-300 font-bold italic'><Link to="/appointment">Appointment</Link></li>
        <li className='hover:bg-cyan-200 rounded-sm hover:text-orange-300 font-bold italic'><Link to="/about">About</Link></li>
        { user?.uid? 
        <>
        <li className='hover:bg-cyan-200 rounded-sm hover:text-orange-300 font-bold italic'><Link to="/dashboard">Dashboard</Link></li>
           
            <li className='hover:bg-cyan-200 rounded-sm hover:text-orange-300 font-bold italic'><button onClick={handleLogOut}>Sign out</button></li>
        </>
        :
        <li className='hover:bg-cyan-200 rounded-sm hover:text-orange-300 font-bold italic'><Link to="/login">Login</Link></li>}
    </React.Fragment>
    return (
        <div className="bg-gray-200 navbar flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow hover:bg-orange-500 rounded-box w-52">
                       {menuItems}
                    </ul>
                </div>
                {/* <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link> */}
                <img src={teeth} className='w-20 h-25 pl-4 flex sm:justify-end' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        
                    </label>
        </div>
    );
};

export default Navbar;