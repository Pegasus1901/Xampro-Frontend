import React from 'react'
import '../CSS/ddashboard00.css'


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
                      <span className="link-name">Dahsboard</span>
                  </a></li>
                  <li><a href="#">
                      <i className="uil uil-files-landscapes"></i>
                      <span className="link-name">Content</span>
                  </a></li>
                  <li><a href="#">
                      <i className="uil uil-chart"></i>
                      <span className="link-name">Analytics</span>
                  </a></li>
                  {/* <li><a href="#">
                          <i className="uil uil-thumbs-up"></i>
                          <span className="link-name">Like</span>
                      </a></li>
                      <li><a href="#">
                          <i className="uil uil-comments"></i>
                          <span className="link-name">Comment</span>
                      </a></li>
                      <li><a href="#">
                          <i className="uil uil-share"></i>
                          <span className="link-name">Share</span>
                      </a></li> */}
              </ul>

              <ul className="logout-mode">
                  <li><a href="#">
                      <i className="uil uil-signout"></i>
                      <span className="link-name">Logout</span>
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