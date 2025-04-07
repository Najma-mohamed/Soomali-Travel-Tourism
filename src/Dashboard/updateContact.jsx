import { useEffect, useState } from "react";
import Sidenave from "../components/-Home/sideNave";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function UpdateContact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();
    const { id } = useParams();

    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
    useEffect(() => {
        axios.get(`http://localhost:1001/contact/readSingle/${id}`)
            .then((res) => {
                if (res.data.length > 0) {
                    setFormData(res.data[0]);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching contact:", error);
                setLoading(false);
            });
    }, [id]);

    
    const updateContact = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:1001/contact/update/${id}`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            toast.success("Contact updated successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                onClose: () => navigate("/contactdash"),
            });

        } catch (error) {
            console.error("Error updating contact:", error);
          
        }
    };

   

    return (
        <div>
            <Sidenave />
            <div className="ml-[30%] pt-40">
                <form onSubmit={updateContact} className="bg-slate-700 rounded-lg w-[46%] h-auto p-8 text-white">
                    <h2 className="text-2xl font-bold text-center mb-4">Update Contact</h2>

                    <label className="block text-white font-semibold">Name</label>
                    <input  name="name"  value={formData.name} onChange={handleChange}  className="border-black border-2 w-full h-10 rounded-lg px-3 mb-3"  type="text"  placeholder="Name"  required />

                    
                    <label className="block text-white font-semibold">Email</label>
                    <input   name="email"   value={formData.email}  onChange={handleChange}  className="border-black border-2 w-full h-10 rounded-lg px-3 mb-3"  type="email"    placeholder="Email" required />

                   
                    <label className="block text-white font-semibold">Phone</label>
                    <input   name="phone"  value={formData.phone}   onChange={handleChange}   className="border-black border-2 w-full h-10 rounded-lg px-3 mb-3"  type="tel"  placeholder="Phone Number" required   />

                   
                    <label className="block text-white font-semibold">Address</label>
                    <textarea  name="address" value={formData.address}  onChange={handleChange}  className="border-black border-2 w-full h-20 rounded-lg px-3 py-2 mb-3"  placeholder="Enter your address"  required ></textarea>

                  
                    <button type="submit"  className="bg-orange-400 w-full py-3 rounded-lg text-white font-semibold hover:bg-orange-500 transition" > Update Contact </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default UpdateContact;
