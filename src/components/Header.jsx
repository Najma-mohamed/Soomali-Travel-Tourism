import { Link} from "react-router-dom"

const Header = () => {

    const destinations = [
        {
            name: "New York City",
            image: "https://images.pexels.com/photos/119777/pexels-photo-119777.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            name: "Norway Lake",
            image: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];
    const stats = [
        { number: "2000+", text: "Awesome Hikers", bg: "bg-blue-100" },
        { number: "70+", text: "Stunning Places", bg: "bg-purple-100" },
        { number: "1200+", text: "Miles to Hike", bg: "bg-green-100" },
        { number: "15", text: "Years in Service", bg: "bg-blue-200" },
    ];

    return (<>
        <div className="bg-cover  bg-center bg-no-repeat mb-[880px] sm:mb-4    h-[1500px] sm:h-[830px] bg-[url(https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
            <div className="bg-gray-50 px-2 sm:px-12">
                <div className="sm:flex justify-between sm:px-12 pb-3">
                    <div className="gap-10 flex py-2 pl-2 sm:pl-0 text-xl ">
                        <div className="flex gap-2">
                            <i className="fa-solid fa-phone mt-1 e  "></i>
                            <h1> +921 - 48564254</h1>
                        </div>
                        <div className="flex gap-2">
                            <i className="fa-solid fa-message e mt-1 " > </i>
                            <h1>+921 - 48564254</h1>
                        </div>
                    </div>

                    <div className="flex pl-3 sm:pl-0 ">
                        <div className="flex pt-1 gap-2">
                            <h1 className="pt-1">ENG</h1>
                            <i class="fa-solid fa-chevron-down ml-1 mt-2"></i>
                        </div>
                        <div className="flex pt-1 ml-4 gap-2">
                            <h1 className="pt-1">$USD</h1>
                            <i class="fa-solid fa-chevron-down ml-1 mt-2"></i>
                        </div>
                        <div className="flex text-xl">
                            <button className="hover:text-orange-600 px-5 rounded-lg h-7 mt-1 font-semibold">Login</button>
                            <p className="pt-1">|</p>
                            <button className="hover:text-orange-600 px-5 rounded-lg h-7 mt-1 font-semibold">Register</button>
                        </div>
                    </div>
                </div>

                <hr />

                <div className=" flex  justify-between px-2 sm:px-12 h-16 pt-2 ">
                    <div className="flex gap-3 ">
                        <i class="fa-solid fa-plane-departure text-yellow-600 text-4xl"></i>
                        <h1 className=" font-serif font-semibold text-xl  ">Somali Travel <br /> <span className="text-yellow-600 text-sm pb">and  Tourism</span> </h1>
                    </div>

                    <ul className="sm:flex hidden  gap-7 pt-4 font-serif ">
                        <Link to="/">   <li className="hover:text-amber-500">Home</li></Link>
                        <Link to="/About">   <li className="hover:text-amber-500">About</li></Link>
                        <Link to="/Service" ><li className="hover:text-amber-500">Service</li></Link>
                     <Link to="/packages" >  <li className="hover:text-amber-500">package</li> </Link> 
                        <li className="hover:text-amber-500">Destination <i class="fa-solid fa-chevron-down"></i></li>
                        <li className="hover:text-amber-500">Blog <i class="fa-solid fa-chevron-down"></i></li>
                        <Link to="/contact">   <li  className="hover:text-amber-500">Contact</li></Link>
                    </ul>
                    <i class="fa-solid fa-magnifying-glass text-2xl pt-4"></i>

                    <button className="px-8 rounded-full sm:block hidden text-white font-semibold h-10 mt-2 hover:bg-gray-400 bg-orange-500">Booking Now</button>

                </div>
            </div>
            <div className="sm:flex justify-between px-2 sm:px-20">
                <div>
                    <h1 className="sm:text-6xl text-4xl font-bold pt-[100px] text-white">PICK THE BEST CITY FOR YOU <br />  OUR DESTINATIONS</h1>
                    <p className="  text-gray-100 text-xl pt-7 ">Tourism is a vital global industry that allows people to explore new places, <br /> experience different cultures, and create <br /> unforgettable memories. </p>
                    <button className="px-12 hover:bg-black bg-orange-400 h-10 rounded-full text-white font-semibold mt-7">view more</button>
                    <button className="px-12 bg-transparent border-2 border-black ml-4 h-10 rounded-full  font-semibold mt-7">view more</button>
                </div>

                <img src="https://keen-sundae-f40659.netlify.app/assets/img/slider/slider-man.png" className="h-[510px] animate-pulse mt-5 w-[400px]" alt="" />
            </div>

            <div className="bg-gray-300   sm:flex sm:w-[1300px] w-[370px]  sm:ml-48 rounded-tl-xl rounded-br-4xl justify-between sm:px-12 h-[1050px] ml-2  sm:h-[470px]">
                <div className="sm:w-[400px] pt-6 pl-2 mt-24">
                    <h1 className="text-4xl font-bold pb-3">ABOUT US</h1>
                    <p>We are passionate about responsible and sustainable tourism, ensuring that our trips contribute positively to local communities and preserve the natural beauty of the destinations we visit. Our team of expert travel planners, guides, and hospitality partners work tirelessly to provide exceptional services, making your travel dreams a reality.</p>
                    <button className="bg-orange-500 px-12 h-10 rounded-lg font-semibold text-white mt-5">READ MORE</button>
                </div>

                <div className="flex w-84 justify-center items-center  p-6">
                    <iframe
                        className="w-full  h-80   shadow-lg"
                        src="https://www.youtube.com/embed/SbVjY45vlLM?si=ErjQ3FAI09THqc16" title="YouTube video player" frameborder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="sm:w-[400px] pl-3 sm:mt-24">
                    <h1 className="text-4xl font-bold pb-3">ABOUT US</h1>
                    <p>We are passionate about responsible and sustainable tourism, ensuring that our trips contribute positively to local communities and preserve the natural beauty of the destinations we visit. Our team of expert travel planners, guides, and hospitality partners work tirelessly to provide exceptional services, making your travel dreams a reality.</p>
                    <button className="bg-orange-500 px-8 h-10  font-semibold text-white mt-5">READ MORE</button>
                </div>
            </div>
        </div>
        
        <section className="bg-white sm:mt-[400px] mt- px-6 md:px-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">


                    <div className="md:w-1/3 text-left">
                        <h4 className="text-gray-600 font-semibold uppercase tracking-wide">
                            Choose Your Place
                        </h4>
                        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
                            Popular Destinations
                        </h2>
                        <p className="text-gray-500 mt-4 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                        </p>
                    </div>

                    <div className="md:w-2/3 flex gap-6">
                        {destinations.map((destination, index) => (
                            <div
                                key={index}
                                className="relative w-1/2 rounded-xl overflow-hidden shadow-lg group"
                            >
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                                {/* Destination Name */}
                                <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">
                                    {destination.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="py-12 px-6 md:px-16 bg-gray-50">
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className={`w-36 h-36 ${item.bg} flex items-center justify-center rounded-full`}>
                                <h3 className="text-3xl font-extrabold text-gray-900">{item.number}</h3>
                            </div>
                            <p className="text-gray-500 mt-3">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="sm:flex justify-between pt-12 px-16 sm:mt-[50px] mb-12 ">
                <div className="">
                    <h1 className="text-3xl font-bold pb-2">Popular Destination</h1>
                    <p className="font-serif text-gray-600">Despite challenges, Somalia is home to breathtaking beaches, historical sites,<br /> mountains, and cultural heritage  that make it a unique and <br /> hidden tourist gem in Africa.</p>
                </div>
                <button className="bg-orange-500 sm:w-36 w-60 h-10 sm:mt-20 mt-12 font-semibold text-white rounded-full">Discover More</button>
            </div>

        </>  )
}
export default Header