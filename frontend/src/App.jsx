import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./assets/navbar";
import HeroSection from "./assets/Herosection";
import Services from "./assets/Detailsection";
import VideoSection from "./assets/VideoSection";
import FooterSection from "./assets/FooterSection";
import ServicesPage from "./assets/ServicesPage"; // We will create this next
import PartsPage from "./assets/PartsPage";
import FeaturedParts from "./assets/FeaturedParts";
 import ContactPage from "./assets/ContactPage";
 import RentalRates from "./assets/RentalRates";
 import ScrollToTop from "./assets/ScrollToTop";
 import StatsCounter from "./assets/StatsCounter";
 import BrandSlider from "./assets/BrandSlider";
 import QuickContact from "./assets/QuickContact";
 import NotFound from "./assets/NotFound";
 import LoginPage from "./assets/Login";
import "./App.css";

// This represents your current landing page
const Home = () => (
  <>
    <HeroSection />
    <StatsCounter />
    <Services />
    <FeaturedParts />
    <BrandSlider />
    <VideoSection />
    
  </>
);

function App() {

    const EmergencyBar = () => (
  <div className="bg-danger text-white text-center py-2 fw-bold small">
    🚀 24/7 EMERGENCY REPAIR & TOWING ACROSS HARYANA: +91 8053966706
  </div>
);
  return (
    <Router>
      <ScrollToTop />
      <EmergencyBar/>
      <NavBar />
      <QuickContact/>
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />

        {/* Dedicated Services Page */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/parts" element={<PartsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/rental-rates" element={<RentalRates />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
