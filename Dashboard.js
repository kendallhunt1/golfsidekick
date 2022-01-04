import React from 'react';
import '../Styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="bigWrapper">
                <div className="dashboardHeading">
                    <h1>GOLF SIDEKICK</h1>
                </div>
                <div className="dashboardMainContent">
                    <div className="dashboardBox">
                        <div className="dashboardBoxTop">
                            <span>The easiest, most simple advice that is proven to lower handicaps.</span>
                        </div>
                        <div className="dashboardBoxBottom">
                            <button>Log In</button>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;