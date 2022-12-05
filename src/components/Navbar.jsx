import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

function Navbar() {
    const [showMenu, setShowMenu] = useState(true);
    const location = useLocation();
    const path = location.pathname.split('/')[1]


  return (
    <div className="container" style={{ position:'relative' }}>
        <div className='navbar-section'>
            <div className='nav-wrapper'>
                <Link to='/' style={{ textDecoration:'none', color:'black' }}>
                    <div className="logo">
                        <h4>Christians</h4>
                    </div>
                </Link>
                <div className="links">
                    <ul>
                        <Link to='/' style={{ textDecoration:'none', color:`${path === '' ? '#f45d48' : 'black'}` }}>
                            <li>Home</li>
                        </Link>
                        
                        <Link to='/teachings' style={{ textDecoration:'none', color:`${path === 'teachings' ? '#f45d48' : 'black'}` }}>
                            <li>Bible Study</li>
                        </Link>

                        <Link to='/gallery' style={{ textDecoration:'none', color:`${path === 'gallery' ? '#f45d48' : 'black'}` }}>
                            <li>Gallery & Events</li>
                        </Link>

                        <Link to='/about' style={{ textDecoration:'none', color:`${path === 'about' ? '#f45d48' : 'black'}` }}>
                            <li>About Us</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="media-handles">
                <i title='facebook' className="fa fa-facebook" aria-hidden="true"></i>
                <i title='youtube' className="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
            <div className="menu" onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <i className="fa fa-bars"  aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}
            </div>

        </div>

        {/*Drawer*/}
        <div className={showMenu ? 'sidebar-active' : 'sidebar'}>

            {!showMenu ? <ul className='sidebar-list'>
                <Link to='/' style={{ textDecoration:'none', color:`${path === '' ? '#f45d48' : '#fff'}` }}>
                    <li>Home</li>
                </Link>

                <Link to='/teachings' style={{ textDecoration:'none', color:`${path === '/teachings' ? '#f45d48' : '#fff'}` }}>
                    <li>Bible Study</li>
                </Link>

                <Link to='/gallery' style={{ textDecoration:'none', color:`${path === '/gallery' ? '#f45d48' : '#fff'}` }}>
                    <li>Gallery & Events</li>
                </Link>

                <Link to='/about' style={{ textDecoration:'none', color:`${path === '/about' ? '#f45d48' : '#fff'}` }}>
                    <li>About Us</li>
                </Link>
            </ul> : <div></div>}
        </div>
    </div>
  )
}

export default Navbar