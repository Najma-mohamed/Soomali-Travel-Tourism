import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 h-screen mt-10 text-gray-900">
           
            <div className="bg-center h-[500px] bg-[url(https://images.pexels.com/photos/31048804/pexels-photo-31048804/free-photo-of-hiking-trail-in-ollantaytambo-peru-s-andes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] text-white py-10 text-center pt-48 px-6">
                <h2 className="text-4xl font-bold">Subscribe to get special price</h2>
                <p className="mt-2 text-gray-300">Don’t wanna miss something? Subscribe right now and get <br /> special promotions and monthly newsletters. </p>

               
                <div className="mt-6 flex justify-center">
                    <input type="email" placeholder="Type your email here" className="w-[450px] p-3 pl-5 bg-gray-300 rounded-full text-black focus:outline-none" />
                    <button className="bg-black text-white px-6 h-10 ml-80 mt-1 mr-2 absolute rounded-full">Subscribe </button>
                </div>
            </div>

           
            <div className="container  px-12 py-12 flex justify-around text-center md:text-left">
                <div>
                    <div className="flex gap-3 ">
                        <i class="fa-solid fa-plane-departure text-yellow-600 text-4xl"></i>
                        <h1 className=" font-serif font-semibold text-xl  ">Somali Travel <br /> <span className="text-yellow-600 text-sm pb">and  Tourism</span> </h1>
                    </div>
                    <p>  Somalia has a strong cultural identity, a growing economy, and <br /> a deep-rooted history that dates back thousands of years.</p>
                </div>


              
                <div>
                    <h3 className="text-xl font-bold">Contact Information</h3>
                    <p className="mt-2">📍 732 Despard St, Atlanta</p>
                    <p>📞 +252 612324567</p>
                    <p>📧 info@traveller.com</p>
                </div>

               
                <div className="flex justify-between ">

                    <ul className=" ">
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-500">Tours</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                    </ul>

                    <div className="pl-12">
                        <h3 className="text-xl font-bold ">Follow Us</h3>
                        <div className="flex">
                            <a href="#" className="hover:text-blue-500">🌍</a>
                            <a href="#" className="hover:text-blue-500">📘</a>
                            <a href="#" className="hover:text-blue-500">🐦</a>
                            <a href="#" className="hover:text-blue-500">📸</a>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="bg-gray-400 text-center py-4 text-gray-100">
                <p>Copyright © All rights reserved (Website Developed & Managed by Najma & Aisha)</p>
            </div>
        </footer>
    );
};

export default Footer;
