import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Aboutus from './pages/Aboutus';
import Legal from './pages/Legal';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route exact path="aboutus" element={<Aboutus />} />
        <Route exact path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </Router>
  );
};
console.log('App.jsx');

export default App;
