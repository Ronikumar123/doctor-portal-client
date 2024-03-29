import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    
                        <li><Link to="/dashboard">Appointments</Link></li>
                        <li><Link to="/dashboard/allusers"> All Users </Link></li>
                        <li><Link to="/dashboard/adddoctor"> Add  A Doctor </Link></li>
                        <li><Link to="/dashboard/managedoctors"> Manage Doctors </Link></li>
                        <li><Link to="/dashboard/report"> Report </Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;