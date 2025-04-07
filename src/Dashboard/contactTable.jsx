import axios from "axios";
import { useState, useEffect } from "react";
import TableBody from "./table";
import SideNave from "../components/-Home/sideNave";
import { NavLink } from "react-router-dom";

const ContactTable = () => {
    const [readData, setReadData] = useState([]);

   
    const handleReadData = async () => {
        try {
            const response = await axios.get("http://localhost:1001/read/contact");
            setReadData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

   
    useEffect(() => {
        handleReadData();
    }, []);

    return <div className="flex w-full h-screen">
        <SideNave />
        <div className="w-[80%] ml-[15%] pt-10 ">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <div className=" flex mb-5 justify-between">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                        Contact List
                    </h2>

                <NavLink to="/formContact"><button className=" bg-orange-400 text-white text-xl rounded-lg px-5 ">New Contact</button></NavLink>
                </div>
                <table className="w-full border-collapse  border-l-2 border-r-2 border-gray-200">
                    <thead>
                        <tr className="bg-cyan-500 text-white">
                            <th className="p-3   text-left">Name</th>
                            <th className="p-3   text-left">Email</th>
                            <th className="p-3   text-left">Description</th>
                            <th className="p-3   text-left">Phone</th>
                            <th className="p-3   text-left">Action</th>
                        </tr>
                    </thead>

                    {readData.length > 0 ? (
                        readData.map((form, index) => (
                            <TableBody id={form._id} name={form.name} email={form.email} address={form.address} phone={form.phone}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center p-4 text-gray-600">
                                No contacts found.
                            </td>
                        </tr>
                    )}

                </table>
            </div>
        </div>
    </div>
};

export default ContactTable;
