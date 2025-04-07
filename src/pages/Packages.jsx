import { FaMapMarkerAlt, FaClock, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
const packages = [
    {
        id: 1,
        name: "Mogadishu City Tour",
        duration: "3 Days / 2 Nights",
        price: "$499",
        location: "Mogadishu, Somalia",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWExtPtFyAG8DgTtBCE2lhdOmxEhHLrsX5xQ&s",
    },
    {
        id: 2,
        name: "Hargeisa Adventure",
        duration: "5 Days / 4 Nights",
        price: "$799",
        location: "Hargeisa, Somaliland",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWI0FHKOSouqbIEEPGcVjfozselRwHriSEA&s",
    },
    {
        id: 4,
        name: "Historical Tour of Somaliland",
        duration: "4 Days / 3 Nights",
        price: "$699",
        location: "Berbera, Somalia",
        image: "https://digitalmallblobstorage.blob.core.windows.net/wp-content/2017/10/AIF43_Lochery_Somalia.jpg",
    },
    {
        id: 3,
        name: "Somali Coastal Experience",
        duration: "7 Days / 6 Nights",
        price: "$999",
        location: "Mogdishu, Somalia",
        image: "https://64.media.tumblr.com/154c567248440996890604e04bcc07e7/tumblr_orzfchMlt61tm1zovo1_1280.pnj",
    },
    {
        id: 2,
        name: "Hargeisa Adventure",
        duration: "5 Days / 4 Nights",
        price: "$799",
        location: "Hargeisa, Somaliland",
        image: "https://somalilandsun.com/wp-content/uploads/2020/09/Berbera-Somaliland.jpg",
    },
    {
        id: 1,
        name: "Mogadishu City Tour",
        duration: "3 Days / 2 Nights",
        price: "$499",
        location: "Mogadishu, Somalia",
        image: "https://lh3.googleusercontent.com/p/AF1QipO3ieSvI0yD57CUpVyQP7Z7J18AeGDRoqKh79oe=s1360-w1360-h1020",
    },
    {
        id: 4,
        name: "Historical Tour of Somalia",
        duration: "4 Days / 3 Nights",
        price: "$699",
        location: "Berbera, Somalia",
        image: "https://lh3.googleusercontent.com/p/AF1QipPUsvx52QLb7T8viHfUGUHugyc7XIMw48jU-Mai=s1360-w1360-h1020",
    },
    {
        id: 3,
        name: "Somaliland Coastal Experience",
        duration: "7 Days / 6 Nights",
        price: "$999",
        location: "Berbera, Somaliland",
        image: "https://images.pexels.com/photos/25798506/pexels-photo-25798506/free-photo-of-shangumugham-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        id: 1,
        name: "Hargeisa City Tour",
        duration: "3 Days / 2 Nights",
        price: "$499",
        location: "Hargeisa, Somaliland",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Hargeisa_War_Memorial.jpg",
    },
];

const PackagesPage = () => {

    return (

        <div className="bg-gray-100">
            <div className=" flex  justify-between px-2 sm:px-12 h-16 pt-2 ">
                <div className="flex gap-3 ">
                    <i class="fa-solid fa-plane-departure text-yellow-600 text-4xl"></i>
                    <h1 className=" font-serif font-semibold text-xl  ">Somali Travel <br /> <span className="text-yellow-600 text-sm pb">and  Tourism</span> </h1>
                </div>

                <ul className="sm:flex hidden  gap-7 pt-4 font-serif ">
                    <Link to="/">   <li className="hover:text-amber-500">Home</li></Link>
                    <Link to="/About">   <li className="hover:text-amber-500">About</li></Link>
                    {/* <Link to="/Service" ><li className="hover:text-amber-500">Service</li></Link> */}
                    <Link to="/packages" >  <li className="hover:text-amber-500">package</li> </Link>
                    <li className="hover:text-amber-500">Destination <i class="fa-solid fa-chevron-down"></i></li>
                    <li className="hover:text-amber-500">Blog <i class="fa-solid fa-chevron-down"></i></li>
                    <Link to="/contact">   <li className="hover:text-amber-500">Contact</li></Link>
                </ul>
                <i class="fa-solid fa-magnifying-glass text-2xl pt-4"></i>

                {/* <button className="px-8 rounded-full sm:block hidden text-white font-semibold h-10 mt-2 hover:bg-gray-400 bg-orange-500">Booking Now</button> */} 

            </div>
            {/* ✅ Hero Section */}
            <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center bg-[url(https://pbs.twimg.com/media/D9ALDXyUcAEeazm?format=jpg&name=900x900)]">
                <div className="text-gray-300 bg-opacity-75 p-10 rounded-lg">
                    <h1 className="text-5xl font-bold">Explore Our Travel Packages</h1>
                    <p className="mt-4 text-lg">Find the best travel experiences tailored for you.</p>
                </div>
            </div>

            {/* ✅ Packages Section */}
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-16">
                <h2 className="text-4xl font-bold text-center text-gray-900">Our Best Travel Packages</h2>
                <p className="text-gray-600 text-center mt-4">
                    Explore breathtaking destinations with our exclusive travel deals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
                            <img src={pkg.image} alt={pkg.name} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{pkg.name}</h3>
                                <p className="text-gray-600 mt-2 flex items-center">
                                    <FaMapMarkerAlt className="text-orange-500 mr-2" /> {pkg.location}
                                </p>
                                <p className="text-gray-600 mt-1 flex items-center">
                                    <FaClock className="text-blue-500 mr-2" /> {pkg.duration}
                                </p>
                                <p className="text-gray-800 font-bold mt-2 flex items-center">
                                    <FaDollarSign className="text-green-500 mr-2" /> {pkg.price}
                                </p>
                                <button className="mt-4 w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-700 transition duration-300">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
        
    );
};

export default PackagesPage;
