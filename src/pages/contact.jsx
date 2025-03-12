import React from "react";
import { Link } from "react-router-dom"
const Contact = () => {
    return (
        <div className="bg-gray-50">

            <div className="bg-zinc-50 flex justify-between px-12 h-16 pt-2 ">
                <div className="flex gap-3 ">
                    <i class="fa-solid fa-plane-departure text-yellow-600 text-4xl"></i>
                    <h1 className=" font-serif font-semibold text-xl  ">Somali Travel <br /> <span className="text-yellow-600 text-sm pb">and  Tourism</span> </h1>
                </div>

                <ul className="sm:flex hidden gap-7 pt-4 font-serif ">
                    <Link to="/">   <li>Home</li></Link>
                    <Link to="/About">   <li>About</li></Link>
                    <li>package  <i class="fa-solid fa-chevron-down"></i></li>
                    <li>Destination <i class="fa-solid fa-chevron-down"></i></li>
                    <li>Blog <i class="fa-solid fa-chevron-down"></i></li>
                    <Link to="/contact">   <li>Contact</li></Link>
                </ul>
                <i class="fa-solid fa-magnifying-glass text-2xl pt-4"></i>
            </div>

            <div className="bg-cover bg-bottom w-full h-[300px] bg-no-repeat bg-[url('https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
                <h1 className="text-7xl pt-12 text-center font-bold text-white">Contact</h1>
                <p className="text-center text-white text-2xl font-semibold pt-5"> Discover your next great adventure</p>
            </div>
           
            <section className="py-16 px-6 md:px-20 text-center">
                <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                    We'd love to hear from you! Contact us for inquiries, travel plans, or customer support.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    {[
                        { icon: "📍", title: "Address", text: "732 Despard St, Atlanta" },
                        { icon: "📞", title: "Phone", text: "+252 612123456" },
                        { icon: "📧", title: "Email", text: "info@traveller.com" }
                    ].map((info, index) => (
                        <div key={index} className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl">{info.icon}</h3>
                            <h3 className="text-xl font-semibold mt-2">{info.title}</h3>
                            <p className="mt-2 text-gray-600">{info.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-100 py-12 px-6 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 text-left">
                        <h4 className="text-gray-600 font-semibold uppercase tracking-wide">
                            Get in Touch
                        </h4>
                        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
                            Feel Free to Contact Us
                        </h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Traveling opens the doors to adventure, new cultures, and unforgettable experiences.
                            Whether you're looking for a relaxing beach getaway, thrilling mountain hikes, or exploring
                            historic cities, we're here to help plan your perfect journey. Let us know how we can assist
                            you in making your dream trip come true!
                        </p>


                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="bg-blue-700 text-white p-4 rounded-full hover:opacity-80 transition">
                                <Fa-FacebookF className="text-xl" />
                            </a>
                            <a href="#" className="bg-red-500 text-white p-4 rounded-full hover:opacity-80 transition">
                                <Fa-Google className="text-xl" />
                            </a>
                            <a href="#" className="bg-blue-400 text-white p-4 rounded-full hover:opacity-80 transition">
                                <Fa-Twitter className="text-xl" />
                            </a>
                        </div>
                    </div>

                   
                    <div className="md:w-1/2 bg-gray-200 p-8 rounded-lg shadow-lg">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <textarea
                                rows="5"
                                placeholder="Write Message"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                            >
                                Submit Now
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            
            <section className="py-16 px-6 md:px-20 text-center">
                <h2 className="text-4xl font-bold text-gray-900">Find Us on the Map</h2>
                <div className="mt-6 w-full h-96 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093664!2d144.95373531531714!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df184fdaf%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1632760112345!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>

           
            <footer className="bg-gray-900 mt-6 text-white py-12 px-6 md:px-20 text-center">
                <div className="flex items-center justify-center gap-3">
                    <i className="fa-solid fa-plane-departure text-yellow-600 text-4xl"></i>
                    <h1 className="font-serif font-semibold text-xl">
                        Somali Travel <br />
                        <span className="text-yellow-600 text-sm">and Tourism</span>
                    </h1>
                </div>
                <p className="text-gray-400 mt-2">Your trusted partner for unforgettable travel experiences.</p>
                <div className="mt-6 grid md:grid-cols-3 gap-8 text-gray-300">
                    <div>
                        <h4 className="font-semibold">Contact Info</h4>
                        <p>📍 732 Despard St, Atlanta</p>
                        <p>📞 +252 612123456</p>
                        <p>📧 info@traveller.com</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Quick Links</h4>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Tours</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Follow Us</h4>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="hover:text-blue-400">🌍</a>
                            <a href="#" className="hover:text-blue-400">📘</a>
                            <a href="#" className="hover:text-blue-400">🐦</a>
                            <a href="#" className="hover:text-blue-400">📸</a>
                        </div>
                    </div>
                </div>
                <p className="mt-6 text-gray-500">© 2024 Somali Travel & Tourism. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Contact;
