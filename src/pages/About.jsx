import React from "react";
import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
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

      <section className="sm:flex justify-between sm:px-52 px-12 py-12 sm:py-12">
        <div className="">
          <img src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-[500px] h-[350px] rounded-tl-4xl rounded-br-4xl" alt="" />
        </div>
        <div className="w-80 sm:w-[500px]">
          <h1 className="text-3xl sm:pb-2 pl-8 sm:pl-0 pb-4 sm:pt-0 pt-7 font-semibold">About Tourism</h1>
          <p className="text-gray-800 sm:pl-0  ">Tourism is the activity of traveling to different places for leisure, business, adventure, or cultural experiences.  It plays a significant role in economic growth, cultural exchange, and personal development.

            People travel for various reasons, including:
            ✅ Leisure & Vacation - Relaxing on a beach or exploring a new city.
            ✅ Business & Work -Attending meetings, conferences, or corporate trips.
            ✅ Adventure & Sports  Hiking, diving, or extreme sports in different locations.
            ✅ Cultural & Historical Exploration - Learning about different cultures, traditions, and heritage sites.</p>

          <button className="bg-orange-500 px-12 py-1 sm:ml-0 ml-12 mt-10 text-white font-semibold rounded-lg text-xl">Read More</button>
          <button className="bg-transparent px-12 sm:mt-10 mt-6 ml-12 border-2 border-orange-400 font-semibold rounded-lg text-xl">Read More</button>
        </div>
      </section>

      <div className="bg-gray-50">
        
        <section className="sm:py-16 px-6 md:px-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover a world of adventure with our exclusive travel services.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { title: "🏕️ Adventure Tours", desc: "Experience thrilling outdoor adventures across the world." },
              { title: "🚢 Cruise Packages", desc: "Relax and explore beautiful coastal destinations with our luxury cruises." },
              { title: "🏨 Hotel Bookings", desc: "Find the best hotel deals and accommodations worldwide." }
            ].map((service, index) => (
              <div key={index} className="p-8 bg-blue-900 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

      
        <section className="py-16 px-6 md:px-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Enjoy Your Journey 🚀</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Unforgettable moments from our travel experiences worldwide.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              "https://images.pexels.com/photos/31058025/pexels-photo-31058025/free-photo-of-aerial-view-of-dominican-republic-coastline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              "https://images.pexels.com/photos/31069018/pexels-photo-31069018/free-photo-of-ryanair-aircraft-on-runway-with-scenic-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              "https://images.pexels.com/photos/31065772/pexels-photo-31065772/free-photo-of-galata-tower-overlooking-istanbul-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            ].map((img, index) => (
              <img key={index} src={img} alt={`Travel ${index + 1}`} className="rounded-lg h-72 w-full object-cover shadow-lg hover:scale-105 transition-all duration-300" />
            ))}
          </div>
        </section>

       
        <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide the best travel experiences with expert guidance and unbeatable offers.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { title: "🌍 Expert Guides", desc: "Our professional guides ensure a safe and memorable experience." },
              { title: "✈️ Hassle-Free Booking", desc: "Easy and secure booking system with the best deals available." },
              { title: "🏝️ Best Destinations", desc: "We offer tours to the world's most breathtaking locations." }
            ].map((reason, index) => (
              <div key={index} className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="mt-2 text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>



        <div className="bg-center h-[370px] bg-[url(https://images.pexels.com/photos/31048804/pexels-photo-31048804/free-photo-of-hiking-trail-in-ollantaytambo-peru-s-andes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] text-white py-10  text-center px-6">
          <h2 className="text-4xl font-bold">Subscribe to get special price</h2>
          <p className="mt-2 text-gray-300">Don’t wanna miss something? Subscribe right now and get <br /> special promotions and monthly newsletters. </p>


          <div className="mt-6 flex justify-center">
            <input type="email" placeholder="Type your email here" className="w-[450px] p-3 pl-5 bg-gray-300 rounded-full text-black focus:outline-none" />
            <button className="bg-black text-white px-6 h-10 ml-52 sm:ml-80 mt-1 mr-2 absolute rounded-full">Subscribe </button>
          </div>
        </div>


       
        <footer className="bg-gray-900  text-white py-12 px-6 md:px-20 text-center">
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
    </>
  );
};

export default About;
