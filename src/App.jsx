import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PackagesPage from "./pages/Packages";
import Dashboard from "./Dashboard/Dashboard";
import ContactForm from "./Dashboard/ContactForm";
import ContactTable from "./Dashboard/contactTable";
import UpdateContact from "./Dashboard/updateContact";
// import LoginDashboard from "../components/Login/loginDashboard";
// import AdminDashboard from "../components/Admin/AdminDashboard";
// import ProtectedRoute from "./routes/ProtectedRoute"; // Add Protected Routes
import Login from "./components/Login/loginDashboard"; // Ensure correct import

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/loginDashboard" element={<LoginDashboard />} />
        <Route path="/admin/login" element={<Login />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contactdash" element={<ContactTable />} />
        <Route path="/formContact" element={<ContactForm />} />
        <Route path="/updateContact/:id" element={<UpdateContact />} />

        {/* Protected Admin Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
