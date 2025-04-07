// import { useState } from "react";
// import AddUser from "./AddUser"; // ✅ Import AddUser component

// const Bookings = () => {
//   // ✅ Store bookings in state
//   const [bookings, setBookings] = useState([
//     { id: 1, name: "Ali Hassan", package: "Mogadishu Tour", status: "Confirmed" },
//     { id: 2, name: "Fatima Noor", package: "Somaliland Adventure", status: "Pending" },
//   ]);

  
//   const addBooking = (newBooking) => {
//     setBookings([...bookings, { id: bookings.length + 1, ...newBooking }]);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Bookings</h1>

      
//       <AddUser onAddBooking={addBooking} />

//       <table className="w-full border-collapse bg-white text-center shadow-lg rounded-lg mt-6">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-3">ID</th>
//             <th className="p-3">Customer Name</th>
//             <th className="p-3">Package</th>
//             <th className="p-3">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking.id} className="border-t">
//               <td className="p-3">{booking.id}</td>
//               <td className="p-3">{booking.name}</td>
//               <td className="p-3">{booking.package}</td>
//               <td className="p-3">{booking.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Bookings;
