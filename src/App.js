import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { Home } from './Home';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Aboutus } from './pages/Aboutus';
import LearnMore from './pages/LearnMore'; 
import ContactUs from './pages/ContactUs1';
import { Topbar } from './pages/Topbar';
import Footer1 from './pages/Footer1';
import { Imagesuffel } from './pages/Imagesuffel';
import { Homeyoutube } from './pages/Homeyoutube';
import Dropdownap, { Dropdown } from './pages/Dropdownap';
import { Mbbsinabroad } from './pages/Mbbsinabroad';
import { Popup } from './pages/Popup';
import { UniversitiesFeat } from './pages/UniversitiesFeat';
import { Bestuniversity } from './pages/Bestuniversity';
import { Button } from './pages/Button';
import PopupForm from './pages/PopupForm';
import { Useeffect } from './unwanted/Useeffect';



 
const loadFonts = () => {
  const link1 = document.createElement('link');
  link1.rel = 'preconnect';
  link1.href = 'https://fonts.googleapis.com';

  const link2 = document.createElement('link');
  link2.rel = 'preconnect';
  link2.href = 'https://fonts.gstatic.com';
  link2.crossOrigin = 'anonymous';

  const link3 = document.createElement('link');
  link3.rel = 'stylesheet';
  link3.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:slnt,wght@-10..0,100..900&display=swap';

  document.head.appendChild(link1);
  document.head.appendChild(link2);
  document.head.appendChild(link3);
};

loadFonts();


function App() {
  return (
    <div className="App">
    <Router>
        <Topbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LearnMore" element={<LearnMore/>} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/mbbs-in-abroad" element={<Mbbsinabroad />} />
        </Routes>
        <Homeyoutube />
        <Footer1 />
      </Router>     


    </div>
  );
}

export default App;
