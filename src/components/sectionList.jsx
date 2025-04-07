import Secttion3 from "./section3"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.png"
import img3 from "../assets/3.jpg"
import img6 from "../assets/6.jpg"
import img5 from "../assets/5.jpg"
import img9 from "../assets/9.jpg"


const SectionList =()=>{
    return <div className="sm:grid sm:grid-cols-3 px-12  gap-5 sm:px-32 py-10">
       <Secttion3 img={img1} Title="somalia" price="2500.00/2days" />
       <Secttion3 img={img2} Title="swiss" price="205.00/1day" />
       <Secttion3 img={img3} Title="thailand" price="2500.00/3days" />
       <Secttion3 img={img6} Title="taiwan" price="1500.00/1day" />
       <Secttion3 img={img5} Title="indonesi" price="2500.oo/3days" />
       <Secttion3 img={img9} Title="india" price="14000.00/4days" />
      

    </div>
}

export default SectionList
