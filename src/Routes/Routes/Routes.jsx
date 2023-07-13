import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Report from "../../Pages/Dashboard/Report/Report";
import About from "../../Pages/About/About";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
           {
            path: '/',
            element: <Home></Home>
           },
           {
            path: '/login',
            element:<Login></Login>
           },
           {
            path: '/signup',
            element:<SignUp></SignUp>
           },
           {
            path: '/appointment',
            element:<Appointment></Appointment>
           },
           {
            path: '/about',
            element:<About></About>
           },
           {
            path: '/dashboard',
            element:<MyAppointment/>
           },
           {
            path: '/dashboard' ,
            element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
            children:[
                {
                    path: '/dashboard',
                    element: <MyAppointment></MyAppointment>
                },
                {
                    path: '/dashboard/allusers',
                    element: <AllUsers></AllUsers>
                },
                {
                    path: '/dashboard/adddoctor',
                    element: <AddDoctor></AddDoctor>
                },
                {
                    path: '/dashboard/managedoctors',
                    element: <ManageDoctors></ManageDoctors>
                },
                {
                    path: '/dashboard/report',
                    element: <Report></Report>
                },
            ]
           }
        ]
    }
])

export default router;