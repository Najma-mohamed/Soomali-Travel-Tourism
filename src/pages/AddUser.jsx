// import { useState } from "react";

// const AddUser = ({ onAddBooking }) => {
//   const [name, setName] = useState("");
//   const [packageName, setPackageName] = useState("");
//   const [status, setStatus] = useState("Pending");

//   const handleSubmit = (e) => {
//     e.preventDefault();

   
//     onAddBooking({ name, package: packageName, status });

  
//     setName("");
//     setPackageName("");
//     setStatus("Pending");
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Add New Booking</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Enter Customer Name"
//           className="w-full p-2 border rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter Package Name"
//           className="w-full p-2 border rounded"
//           value={packageName}
//           onChange={(e) => setPackageName(e.target.value)}
//         />
//         <select
//           className="w-full p-2 border rounded"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//         >
//           <option value="Pending">Pending</option>
//           <option value="Confirmed">Confirmed</option>
//         </select>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add Booking
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddUser;
