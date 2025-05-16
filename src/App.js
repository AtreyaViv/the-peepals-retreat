import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';
import Loader from './components/loader';
import Home from './components/home';

// Lazy load route components
const AboutUs = lazy(() => import('./components/aboutUs'));
const Services = lazy(() => import('./components/services'));
const Accommodations = lazy(() => import('./components/accommodations'));
const Gallery = lazy(() => import('./components/gallery'));
const MarriagePackage = lazy(() => import('./components/marriagePackage'));
const BookNow = lazy(() => import('./components/bookNow'));
const ContactUs = lazy(() => import('./components/contactUs'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accommodation" element={<Accommodations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/marriage-package" element={<MarriagePackage />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
