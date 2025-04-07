import { useState } from "react";
import axios from "axios";
import SideNave from "../components/-Home/sideNave";

const ContactForm = () => {
  const [name, setName] = useState(""); // Use string instead of []
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(""); // Success/Error message

  // Function to submit form data
  const handleAddProduct = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = { name, email, address, phone };

    try {
      await axios.post("http://localhost:1001/create/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMessage("Successfully submitted! ✅");
      setName("");
      setEmail("");
      setAddress("");
      setPhone("");
    } catch (error) {
      setMessage("Submission failed. ❌ Try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full h-screen">
      <SideNave />
      <div className="ml-[30%] w-[80%] h-[800px] pt-20">
        <form
          onSubmit={handleAddProduct}
          className="bg-slate-700 rounded-lg w-[46%] h-[500px] p-10 text-white"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Contact Form</h2>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-black border-2 w-80 h-8 rounded-lg px-2 mb-3"
            type="text"
            placeholder="Name"
            required
          />
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-black border-2 w-80 h-8 rounded-lg px-2 mb-3"
            type="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-black border-2 w-80 h-8 rounded-lg px-2 mb-3"
            type="number"
            placeholder="Phone"
            required
          />
          <br />
          <textarea
            name="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-cyan-400 mb-3"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-slate-300 px-8 py-3 w-full rounded-lg text-black font-semibold"
          >
            Submit
          </button>

          {message && (
            <p className="text-center mt-3 font-semibold">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
