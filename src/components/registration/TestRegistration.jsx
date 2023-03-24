import React from 'react'
import './testregistration.css'
// import './testRegisteration.js'

const TestRegistration = () => {
    return (
        <div className="container">
            <header>Registration</header>

            <form action="#">
                <div className="form first">
                    <div className="details personal">
                        <span className="title">Personal Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your name"  />
                            </div>

                            <div className="input-field">
                                <label>Date of Birth</label>
                                <input type="date" placeholder="Enter birth date"  />
                            </div>

                            <div className="input-field">
                                <label>Email</label>
                                <input type="text" placeholder="Enter your email"  />
                            </div>

                            <div className="input-field">
                                <label>Mobile Number</label>
                                <input type="number" placeholder="Enter mobile number"  />
                            </div>

                            <div className="input-field">
                                <label>Gender</label>
                                <select >
                                    <option disabled>Select gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <label>Occupation</label>
                                <input type="text" placeholder="Enter your ccupation"  />
                            </div>
                        </div>
                    </div>

                    <div className="details ID">
                        <span className="title">Identity Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>ID Type</label>
                                <input type="text" placeholder="Enter ID type"  />
                            </div>

                            <div className="input-field">
                                <label>ID Number</label>
                                <input type="number" placeholder="Enter ID number"  />
                            </div>

                            <div className="input-field">
                                <label>Issued Authority</label>
                                <input type="text" placeholder="Enter issued authority"  />
                            </div>

                            <div className="input-field">
                                <label>Issued State</label>
                                <input type="text" placeholder="Enter issued state"  />
                            </div>

                            <div className="input-field">
                                <label>Issued Date</label>
                                <input type="date" placeholder="Enter your issued date"  />
                            </div>

                            <div className="input-field">
                                <label>Expiry Date</label>
                                <input type="date" placeholder="Enter expiry date"  />
                            </div>
                        </div>

                        <button className="nextBtn">
                            <span className="btnText">Next</span>
                            <i className="uil uil-navigator"></i>
                        </button>
                    </div>
                </div>

                <div className="form second">
                    <div className="details address">
                        <span className="title">Address Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>Address Type</label>
                                <input type="text" placeholder="Permanent or Temporary"  />
                            </div>

                            <div className="input-field">
                                <label>Nationality</label>
                                <input type="text" placeholder="Enter nationality"  />
                            </div>

                            <div className="input-field">
                                <label>State</label>
                                <input type="text" placeholder="Enter your state"  />
                            </div>

                            <div className="input-field">
                                <label>District</label>
                                <input type="text" placeholder="Enter your district"  />
                            </div>

                            <div className="input-field">
                                <label>Block Number</label>
                                <input type="number" placeholder="Enter block number"  />
                            </div>

                            <div className="input-field">
                                <label>Ward Number</label>
                                <input type="number" placeholder="Enter ward number"  />
                            </div>
                        </div>
                    </div>

                    <div className="details family">
                        <span className="title">Family Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label>Father Name</label>
                                <input type="text" placeholder="Enter father name"  />
                            </div>

                            <div className="input-field">
                                <label>Mother Name</label>
                                <input type="text" placeholder="Enter mother name"  />
                            </div>

                            <div className="input-field">
                                <label>Grandfather</label>
                                <input type="text" placeholder="Enter grandfther name"   />
                            </div>

                            <div className="input-field">
                                <label>Spouse Name</label>
                                <input type="text" placeholder="Enter spouse name"  />
                            </div>

                            <div className="input-field">
                                <label>Father in Law</label>
                                <input type="text" placeholder="Father in law name"  />
                            </div>

                            <div className="input-field">
                                <label>Mother in Law</label>
                                <input type="text" placeholder="Mother in law name"  />
                            </div>
                        </div>

                        <div className="buttons">
                            <div className="backBtn">
                                <i className="uil uil-navigator"></i>
                                <span className="btnText">Back</span>
                            </div>

                            <button className="sumbit">
                                <span className="btnText">Submit</span>
                                <i className="uil uil-navigator"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <script src="script.js"></script>
        </div>
    )
}

export default TestRegistration