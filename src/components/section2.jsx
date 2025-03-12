const Secttion2 = () => {



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

    return (
        <>
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
        </>)
}
export default Secttion2