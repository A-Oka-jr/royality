import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./pages/Home/Home"));
const AboutPage = lazy(() => import("./pages/About/About"));
const CarsPage = lazy(() => import("./pages/Cars/Cars"));
const ServicesPage = lazy(() => import("./pages/Services/Services"));
const CarDetailPage = lazy(() => import("./pages/Cars/CarDetail"));
const ContactUsPage = lazy(() => import("./pages/contact/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:id" element={<CarDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
