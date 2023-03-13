import React from 'react'
import '../CSS/ddashboard00.css'
import Logo from '../../Images/logo.png'

const DDashboard = () => {
    return (
        <div className="dashboard01">
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

            <section className="dashboard">
                <div className="dash-content">
                    <div className="overview">
                        <div className="title">
                            <i className="uil uil-tachometer-fast-alt"></i>
                            <span className="text">Dashboard</span>
                        </div>

                        <div className="boxes">
                            <div className="box box1">
                                <i className="uil uil-thumbs-up"></i>
                                <span className="text">Total Likes</span>
                                <span className="number">50,120</span>
                            </div>
                            <div className="box box2">
                                <i className="uil uil-comments"></i>
                                <span className="text">Comments</span>
                                <span className="number">20,120</span>
                            </div>
                            <div className="box box3">
                                <i className="uil uil-share"></i>
                                <span className="text">Total Share</span>
                                <span className="number">10,120</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default DDashboard