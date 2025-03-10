import About from "./pages/About"
import Contact from "./pages/contact"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
