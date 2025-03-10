import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-cover  bg-center bg-no-repeat  h-[830px] bg-[url(https://images.pexels.com/photos/450062/pexels-photo-450062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
            <div className="bg-amber-50  px-12">
                <div className="flex justify-between px-12 pb-3">
                    <div className="gap-10 flex py-2  text-xl ">
                        <div className="flex gap-2">
                            <i className="fa-solid fa-phone mt-1 e  "></i>
                            <h1> +921 - 48564254</h1>
                        </div>
                        <div className="flex gap-2">
                            <i className="fa-solid fa-message e mt-1 " > </i>
                            <h1>+921 - 48564254</h1>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="flex pt-1 gap-2">
                            <h1 className="pt-1">ENG</h1>
                            <i class="fa-solid fa-chevron-down ml-1 mt-2"></i>
                        </div>
                        <div className="flex pt-1 ml-4 gap-2">
                            <h1 className="pt-1">$USD</h1>
                            <i class="fa-solid fa-chevron-down ml-1 mt-2"></i>
                        </div>
                        <div className="flex text-xl">
                            <button className="hover:text-orange-600 px-5 rounded-lg h-7 mt-1 font-semibold">sign in</button>
                            <p className="pt-1">|</p>
                            <button className="hover:text-orange-600 px-5 rounded-lg h-7 mt-1 font-semibold">Register</button>
                        </div>
                    </div>
                </div>

                <hr />

                <div className=" flex justify-between px-12 h-16 pt-2 ">
                    <div className="flex gap-3 ">
                        <i class="fa-solid fa-plane-departure text-yellow-600 text-4xl"></i>
                        <h1 className=" font-serif font-semibold text-xl  ">Somali Travel <br /> <span className="text-yellow-600 text-sm pb">and  Tourism</span> </h1>
                    </div>

                    <ul className="flex  gap-7 pt-4 font-serif ">
                        <Link to="/">   <li className="hover:text-amber-500">Home</li></Link>
                        <Link to="/About">   <li className="hover:text-amber-500">About</li></Link>
                        <li className="hover:text-amber-500">package  <i class="fa-solid fa-chevron-down"></i></li>
                        <li className="hover:text-amber-500">Destination <i class="fa-solid fa-chevron-down"></i></li>
                        <li className="hover:text-amber-500">Blog <i class="fa-solid fa-chevron-down"></i></li>
                        <Link to="/contact">   <li  className="hover:text-amber-500">Contact</li></Link>
                    </ul>
                    <i class="fa-solid fa-magnifying-glass text-2xl pt-4"></i>

                    <button className="px-8 rounded-full text-white font-semibold h-10 mt-2 hover:bg-gray-400 bg-orange-500">Booking Now</button>

                </div>
            </div>
            <div className="flex justify-between px-20">
                <div>
                    <h1 className="text-6xl font-bold pt-[100px] text-white">PICK THE BEST CITY FOR YOU <br />  OUR DESTINATIONS</h1>
                    <p className="  text-gray-100 text-xl pt-7 ">Tourism is a vital global industry that allows people to explore new places, <br /> experience different cultures, and create <br /> unforgettable memories. </p>
                    <button className="px-12 hover:bg-black bg-orange-400 h-10 rounded-full text-white font-semibold mt-7">view more</button>
                    <button className="px-12 bg-transparent border-2 hover:bg-orange-500 border-black ml-4 h-10 rounded-full  font-semibold mt-7">view more</button>
                </div>

                <img src="https://keen-sundae-f40659.netlify.app/assets/img/slider/slider-man.png" className="h-[510px] animate-pulse mt-5 w-[400px]" alt="" />
            </div>

            <div className="bg-gray-300 flex w-[1300px] ml-28 rounded-tl-xl rounded-br-4xl justify-between px-12 h-[470px]">
                <div className="w-[400px] mt-24">
                    <h1 className="text-4xl font-bold pb-3">ABOUT US</h1>
                    <p>We are passionate about responsible and sustainable tourism, ensuring that our trips contribute positively to local communities and preserve the natural beauty of the destinations we visit. Our team of expert travel planners, guides, and hospitality partners work tirelessly to provide exceptional services, making your travel dreams a reality.</p>
                    <button className="bg-orange-500 px-12 h-10 rounded-lg font-semibold text-white mt-5">READ MORE</button>
                </div>

                <div className="flex justify-center items-center p-6">
                    <iframe
                        className="w-full  h-80   shadow-lg"
                        src="https://www.youtube.com/embed/SbVjY45vlLM?si=ErjQ3FAI09THqc16" title="YouTube video player" frameborder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="w-[400px] mt-24">
                    <h1 className="text-4xl font-bold pb-3">ABOUT US</h1>
                    <p>We are passionate about responsible and sustainable tourism, ensuring that our trips contribute positively to local communities and preserve the natural beauty of the destinations we visit. Our team of expert travel planners, guides, and hospitality partners work tirelessly to provide exceptional services, making your travel dreams a reality.</p>
                    <button className="bg-orange-500 px-8 h-10  font-semibold text-white mt-5">READ MORE</button>
                </div>
            </div>
        </div>
    )
}
export default Header