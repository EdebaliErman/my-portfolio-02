import { Route, Routes, } from 'react-router-dom';
import './index.css';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Navbar from './components/Navbar/Navbar';
import Project from './Page/Project/Project';
import Contact from './Page/Contact/Contact';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App h-full p-1 mr-12 w-full  ">
      <Banner/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
