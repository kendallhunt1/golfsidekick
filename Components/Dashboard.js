import React from 'react';
import '../Styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="bigWrapper">
                <div className="dashboardHeading">
                    <div className="headings">
                        <h1 style={{fontSize: "3em"}}>GOLF SIDEKICK</h1>
                        <h1 style={{fontSize: "1.6em"}}>PLAYER: Happy Gilmore</h1>
                    </div>
                </div>
                <div className="dashboardMainContent">
                    <div className="dashboardBoxOne dashboardBox">
                        <div className="dashboardBoxTop">
                            <span>The easiest, most personalized, and simple advice that is proven to lower handicaps. <br /><br />
                                We use your round data to personalize information that will help you lower your scores. <br /><br />
                                No nonsense, no fancy business &mdash; just better golf.
                            </span>
                        </div>
                    </div>
                    <div className="dashboardBoxTwo dashboardBox">
                        <div className="userImage">
                            <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="Default User Image" />
                        </div>
                        <div className="usernamePassword">
                            <input className="username" type="text" placeholder="Username"></input>
                            <input className="password" type="text" placeholder="Password"></input>
                        </div>
                        <div className="loginOrSignUp">
                            <button className="loginButton">LOGIN</button>
                            <button className="signUpButton">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;