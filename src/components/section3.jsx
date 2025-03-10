const Secttion3 = (props) => {
    return (
        <>
        <div className=" shadow-2xl  hover:border-2 hover:border-orange-600    pt-2 rounded-lg border-gray-500 w-[300px] h-[350px] mx-6 mb-3 font-semibold  ">

            <img src={props.img} alt="" className="w-[300px] rounded-t-lg h-[150px]" />
            <div className="flex justify-between px-3 pt-3 text-black text font-semibold">
                <h1 className="font-serif">{props.Title}</h1>
                <h1 className="font-semibold">${props.price}</h1>
            </div>
            <p className="text-gray-500 pl-3 pt-4">Somalia has a rich and diverse tourism sector that,Somalia  become a top destination in Africa.</p>
            <div className=" flex gap-3 pl-1 mt-3 ">
                <div>
                    <i className="fa-solid fa-star text-yellow-400 pl-1 pt-4"></i>
                    <i className="fa-solid fa-star text-yellow-400 pl-1 pt-4"></i>
                    <i className="fa-solid fa-star text-yellow-400 pl-1 pt-4"></i>
                    <i className="fa-solid fa-star text-yellow-400 pl-1 pt-4"></i>
                    <i className="fa-solid fa-star text-yellow-400 pl-1 pt-4"></i>
                </div>
                <button className="bg-orange-500 w-40 h-8  text-white mt-2  rounded-2xl">Booking now</button>
            </div>
        </div>

        
        </> )
}
export default Secttion3  