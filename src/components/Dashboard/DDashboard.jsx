import React from 'react'
import './ddashboard00.css'
import Logo from '../../Images/logo.png'
import Left from './Left'

const DDashboard = () => {
    return (
        <div className="dashboard01">
            <Left />

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