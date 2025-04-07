const Secttion4 = () => {
    return (
        <>

            <div className="bg-gray-100 min-h-screen flex flex-col items-center px-6 md:px-16 py-10">

              
                <h1 className="text-5xl font-extrabold text-gray-900  text-center mb-10">
                    Discover the Beauty of Travel
                    <hr className="mt-4 text-orange-500 border-2 sm:w-[500px] sm:ml-28" />
                </h1>

               
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl bg-white shadow-lg rounded-lg px-12 overflow-hidden">

                  
                    <div className="w-full md:w-1/2">
                        <video className="w-full  h-72 md:h-96 rounded-l-lg" autoPlay loop muted playsInline>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        </video>
                    </div>

                 
                    <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-900">Explore & Experience</h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Travel is more than just visiting places—it’s about experiencing **new cultures, breathtaking landscapes,
                            and unforgettable adventures**. Whether you're exploring ancient cities, hiking through mountains, or
                            relaxing on tropical beaches, every journey leaves a lasting impact.
                            <br /><br />
                            From **European getaways** to **African safaris**, the world is full of diverse experiences waiting to be discovered.
                            **Where will your next adventure take you?**
                        </p>

                     
                        <div className="mt-6 flex justify-center md:justify-start space-x-4">
                            <button className="px-6 h-8 bg-orange-600 text-white rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
                                Explore Destinations
                            </button>
                            <button className="px-6 h-8 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-900 transition duration-300">
                                Plan Your Trip
                            </button>
                        </div>
                    </div>

                </div>

            </div>



            <div className="bg-center bg-no-repeat h-screen  bg-[url(https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
                <div className="animate-pulse">
                    <h1 className="text-2xl text-gray-100 pl-20 sm:pl-[750px] pt-12 sm:pt-52">Come & Join Us</h1>
                    <p className="text-5xl font-extrabold pl-6 sm:pl-32 text-white pt-10">Come & Join Us Making Adventure Tours and Activities <br /> Accessible  and Affordable for Everyone.</p>
                    <button className="px-12 h-10 rounded-lg mt-12 ml-4 sm:ml-[750px] bg-orange-500 hover:bg-black text-white font-semibold">Book Now</button>
                </div>
            </div>
        </>)
}
export default Secttion4
