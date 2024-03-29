import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.scss'
import './responsive.scss'
import Events from './components/Events';
import Gallery from './components/Gallery';
import EventShow from './components/EventShow';
import data from './eventsData'
import ScrollToTop from './components/ScrollTop';
import Lightbox from './components/Lightbox';

// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
        
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> */}
            
          


      <Router>
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lightbox" element={<Lightbox />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventShow/:eventname" element={<EventShow />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
