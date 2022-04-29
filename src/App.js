import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Mint from './components/Mint';

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/roadmap' element={<Roadmap/>} />
        <Route path='/mint' element={<Mint/>}/>
    </Routes>
    </Router>
  );
}

export default App;
