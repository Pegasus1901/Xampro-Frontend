import React from 'react'
import '../CSS/ddashboard00.css'
import Logo from '../../Images/logo.png'
// import Table from './Table/Table'

const DDashboard = () => {
  return (
    <div className="dashboard01">
          <nav>
              <div class="logo-name">
                  <div class="logo-image">
                      <img src={Logo} alt="" />

                  </div>

                  <span class="logo_name">Xampro</span>
              </div>

              <div class="menu-items">
                  <ul class="nav-links">
                      <li><a href="#">
                          <i class="uil uil-estate"></i>
                          <span class="link-name">Dahsboard</span>
                      </a></li>
                      <li><a href="#">
                          <i class="uil uil-files-landscapes"></i>
                          <span class="link-name">Content</span>
                      </a></li>
                      <li><a href="#">
                          <i class="uil uil-chart"></i>
                          <span class="link-name">Analytics</span>
                      </a></li>
                      {/* <li><a href="#">
                          <i class="uil uil-thumbs-up"></i>
                          <span class="link-name">Like</span>
                      </a></li>
                      <li><a href="#">
                          <i class="uil uil-comments"></i>
                          <span class="link-name">Comment</span>
                      </a></li>
                      <li><a href="#">
                          <i class="uil uil-share"></i>
                          <span class="link-name">Share</span>
                      </a></li> */}
                  </ul>

                  <ul class="logout-mode">
                      <li><a href="#">
                          <i class="uil uil-signout"></i>
                          <span class="link-name">Logout</span>
                      </a></li>

                      {/* <li class="mode">
                          <a href="#">
                              <i class="uil uil-moon"></i>
                              <span class="link-name">Dark Mode</span>
                          </a>

                          <div class="mode-toggle">
                              <span class="switch"></span>
                          </div>
                      </li> */}
                  </ul>
              </div>
          </nav>

          <section class="dashboard">
              <div class="dash-content">
                  <div class="overview">
                      <div class="title">
                          <i class="uil uil-tachometer-fast-alt"></i>
                          <span class="text">Dashboard</span>
                      </div>

                      <div class="boxes">
                          <div class="box box1">
                              <i class="uil uil-thumbs-up"></i>
                              <span class="text">Total Likes</span>
                              <span class="number">50,120</span>
                          </div>
                          <div class="box box2">
                              <i class="uil uil-comments"></i>
                              <span class="text">Comments</span>
                              <span class="number">20,120</span>
                          </div>
                          <div class="box box3">
                              <i class="uil uil-share"></i>
                              <span class="text">Total Share</span>
                              <span class="number">10,120</span>
                          </div>
                      </div>
                  </div>
                  <Table/>
                  
              </div>
          </section>

    </div>
  )
}

export default DDashboard