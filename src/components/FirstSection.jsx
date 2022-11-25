import React, {useState} from 'react';

function FirstSection() {
  const [showMenu, setShowMenu] = useState(true);

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
          <li>Home</li>
          <li>Teachings</li>
          <li>Gallery & Events</li>
          <li>About Us</li>
        </ul> : <div></div>}
      </div>
      <div className="container">
        <div className="navbar">
          <div className="navbar-wrapper">
            <div className="left animate__animated animate__fadeInLeft animate__delay-0.1s animate__slow">
              <h3>The Christians</h3>
            </div>
            <div className="right">
              <ul>
                <li className='left animate__animated animate__fadeInUp animate__delay-0.1s animate__slow'>Home</li>
                <li className='left animate__animated animate__fadeInUp animate__delay-0.2s animate__slow'>Teachings</li>
                <li className='left animate__animated animate__fadeInUp animate__delay-0.3s animate__slow'>Gallery & Events</li>
                <li className='left animate__animated animate__fadeInUp animate__delay-0.4s animate__slow'>About Us</li>
              </ul>
              <div className="menu" onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <i className="fa fa-bars" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}
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

