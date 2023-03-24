import React from 'react'
import './ddashboard00.css'
import Logo from '../../Images/logo.png'
import { Link } from 'react-router-dom'



const Left = () => {
  return (
      <div>
        <nav>
          <div className="logo-name">
              <div className="logo-image">
                  <img src={Logo} alt="" />
              </div>
              <span className="logo_name">Xampro</span>
          </div>

          <div className="menu-items">
              <ul className="nav-links">
                  <li><a href="#">
                          <i className="uil uil-estate"></i>
                          <Link to='/rendertable'><span className="link-name">Test Data</span></Link>
                  </a></li>
                  <li><a href="#">
                      <i className="uil uil-files-landscapes"></i>
                          <Link to='/profile'><span className="link-name">Profile</span></Link>
                  </a></li>
                  <li><a href="#">
                      <i className="uil uil-chart"></i>
                          <Link to='/rendertable'><span className="link-name">Teachers Info</span></Link>
                  </a></li>
                      <li><a href="#">
                          <i className="uil uil-comments"></i>
                          <Link to='/testcreation'><span className="link-name">Test</span></Link>
                      </a></li>
                  {/*
                      <li><a href="#">
                          <i className="uil uil-share"></i>
                          <span className="link-name">Share</span>
                      </a></li> */}
              </ul>

              <ul className="logout-mode">
                  <li><a href="#">
                      <i className="uil uil-signout"></i>
                          <Link to='/'><span className="link-name">Logout</span></Link>
                  </a></li>

                  {/* <li className="mode">
                          <a href="#">
                              <i className="uil uil-moon"></i>
                              <span className="link-name">Dark Mode</span>
                          </a>

                          <div className="mode-toggle">
                              <span className="switch"></span>
                          </div>
                      </li> */}
              </ul>
          </div>
      </nav>
      </div>
  )
}

export default Left