import { Route, Routes, } from 'react-router-dom';
import './index.css';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Navbar from './components/Navbar/Navbar';
import Project from './Page/Project/Project';
import Contact from './Page/Contact/Contact';
import Banner from './components/Banner/Banner';
import { data } from './data/data';

function App() {
  return (
    <div className="App  ">
      <Banner banner={data.banner}/>
      <Navbar icon={data.navbar.icon}/>
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
