import React from 'react';

const PlayerTab = () => {
    return (
        <div className="playerTab" style={{background: "rgb(255,237,86)", background: "linear-gradient(125deg, rgba(255,237,86,1) 35%, rgba(242,220,36,1) 100%)"}}>
            <h1>Happy Gilmore</h1>
            <div className="handicapDisplay">
                <div style={{fontSize: "2rem"}}>0.2</div>
                <div style={{fontWeight: "800"}}>HDCP</div>
            </div>
        </div>
    )
}

export default PlayerTab;
