import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Landingpage from './pages/Landingpage';
import Faqs from './pages/Faqs';
import Legal from './pages/Legal';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useEffect } from 'react';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route exact path="faqs" element={<Faqs />} />
        <Route exact path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </Router>
  );
};
console.log('App.jsx');

export default App;
