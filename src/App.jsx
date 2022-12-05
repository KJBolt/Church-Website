import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Teachings from './pages/Teachings';
import SinglePost from './pages/SinglePost';
import Gallery from './pages/Gallery';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/teachings' element={<Teachings />}  />
          <Route path='/post' element={<SinglePost />}  />
          <Route path='/gallery' element={<Gallery />}  />
          <Route path='/about' element={<About />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
