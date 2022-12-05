import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

function FirstSection() {
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();
  const path = location.pathname.split('/')[1]
  console.log(path)

  return (
    <div className='hero'>
      <div className={showMenu ? 'sidebar-active' : 'sidebar'}>
        {!showMenu ? 
          <div className="sidebar-logo">
            <i onClick={() => setShowMenu(!showMenu)} className="fa fa-times" aria-hidden="true"></i>
          </div> :
          <div></div>
        }

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
      <div className="container">
        <div className="navbar">
          <div className="navbar-wrapper">
            <div className="left animate__animated animate__fadeInLeft animate__delay-0.1s animate__slow">
              <h3>Christians</h3>
            </div>
            <div className="right">
              <ul>
                <li className='left animate__animated animate__fadeInUp animate__delay-0.1s animate__slow'>Home</li>

                <Link to='/teachings' style={{ textDecoration:'none', color:'#fff' }}>
                  <li className='left animate__animated animate__fadeInUp animate__delay-0.2s animate__slow'>Bible Study</li>
                </Link>
               
               <Link to='/gallery' style={{ textDecoration:'none', color:'#fff' }}>
                  <li className='left animate__animated animate__fadeInUp animate__delay-0.3s animate__slow'>Gallery & Events</li>
               </Link>
                
                <Link to='/about' style={{ textDecoration:'none', color:'#fff' }}>
                  <li className='left animate__animated animate__fadeInUp animate__delay-0.4s animate__slow'>About Us</li>
                </Link>
                
              </ul>
              <div className="menu" onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <i className="fa fa-bars animate__animated animate__fadeInRight animate__delay-0.1s animate__slow" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}
              </div>
            </div>
          </div>
        </div>

        <div className="landing-page animate__animated animate__fadeInUp animate__delay-0.7s animate__slow">
          <div className="title">
            <h3>Act 11:26</h3>
          </div>
          <div className="subtitle">
            <h3>Let the bible speak</h3>
          </div>
        </div>

      </div>      
    </div>
  )
}

export default FirstSection

