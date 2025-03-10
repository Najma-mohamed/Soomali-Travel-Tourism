import Footer from "../components/Footer"
import Header from "../components/Header"
import Secttion2 from "../components/section2"
import Secttion4 from "../components/section4"
import Secttion5 from "../components/section5"
// import Secttion6 from "../components/section6"
import SectionList from "../components/sectionList"

const Home = () => {
    return (
        <div>
            <Header />
            <Secttion2 />
            <SectionList />
            <Secttion4 />
            <Secttion5 />
            {/* <Secttion6 /> */}
            <Footer />
        </div>
    )
}
export default Home