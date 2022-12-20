import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Teachings from './pages/Teachings';
import SinglePost from './pages/SinglePost';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserDashboard from "./pages/UserDashboard";
import ProductDashboard from "./pages/ProductDashboard";
import EditUser from "./pages/EditUser";
import EditPosts from "./pages/EditPosts";
import EventDashboard from "./pages/EventDashboard";
import EditEvent from "./pages/EditEvent";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/login' element={<Login />}  />
          <Route path='/dashboard/' element={<Dashboard />}  />
          <Route path='/dashboard/users' element={<UserDashboard />}  />
          <Route path='/dashboard/users/:id' element={<EditUser />}  />
          <Route path='/dashboard/posts/:id' element={<EditPosts />}  />
          <Route path='/dashboard/events/:id' element={<EditEvent />}  />
          <Route path='/dashboard/posts' element={<ProductDashboard />}  />
          <Route path='/dashboard/events' element={<EventDashboard />}  />
          <Route path='/register' element={<Register />}  />
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
