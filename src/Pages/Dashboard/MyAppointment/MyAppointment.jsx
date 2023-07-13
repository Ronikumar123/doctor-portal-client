import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Typewriter from 'typewriter-effect';

// const MyAppointment = () => {
//     const { user } = useContext(AuthContext);
//     const url = `http://localhost:5000/bookings?email=${user?.email}`;
//     const { data: bookings = []} = useQuery({
//         queryKey: ['bookings', user?.email],
//         queryFn: async () =>{
//             const res = await fetch(url,            
//                 {headers: {
//                     authorization: `bearer ${localStorage.getItem('accessToken')}`
//                 }
//             });
            
//             const data = await res.json();
//             return data;
//         }
    
//     })
//     return (
//         <div>
//             <h3 className="text-3xl mb-5">My Appointment</h3>
//             <div className="overflow-x-auto">
//                 <table className="table w-full">
                    
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Treatment</th>
//                             <th>Date</th>
//                             <th>Time</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                          {
//                         bookings &&
//                         bookings?.map((booking, i) =><tr key={booking._id}>
//                             <th>{i+1}</th>
//                             <td>{booking.patient}</td>
//                             <td>{booking.treatment}</td>
//                             <td>{booking.appointmentDate}</td>
//                             <td>{booking.slot}</td>
//                         </tr>)
//                     }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };
const MyAppointment =() =>{
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = []} = useQuery({
        queryKey: ['bookings',user?.email],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
          
             <h2 className='text-4xl font-bold text-sky-300 mt-5 mb-5 text-center'><Typewriter
            options={{
              strings: [
                "Welcomes to Admin Panel!!",
              ],
              autoStart: true,
              loop: true,
            }}
          /></h2>
            <h3 className="text-3xl mt-5 mb-5">Appointments</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
     
      {
        bookings.map((booking, i) =><tr key={booking._id}>
            <th>{i+1}</th>
            <td>{booking.patient}</td>
            <td>{booking.treatment}</td>
            <td>{booking.appointmentDate}</td>
            <td>{booking.slot}</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    )
}

export default MyAppointment;