import React, {useState} from 'react';
import PlayerTab from './PlayerTab';
import Chart from 'chart.js/auto';
import '../Styles/Analyze.css';

const Analyze = ({hole1Par, roundData, hole1, playerScores, fairwaysHit, gIRS, roughShots, chips, putts, holePars, par3ScoreArray, par4ScoreArray, par5ScoreArray}) => {

    const [playerScoreAverage, setPlayerScoreAverage] = useState('');
    const [scoreToPar, setScoreToPar] = useState();
    const [amountOfFairwaysHit, setAmountOfFairwaysHit] = useState();
    const [gIRSAverage, setGIRSAverage] = useState();
    const [fHAverage, setFHAverage] = useState();
    const [roughShotsAverage, setRoughShotsAverage] = useState();
    const [chipsAverage, setChipsAverage] = useState();
    const [puttsAverage, setPuttsAverage] = useState();
    const [puttsPerRound, setPuttsPerRound] = useState();
    const [chipsPerRound, setChipsPerRound] = useState();
    const [leftDrivePercentage, setLeftDrivePercentage] = useState();
    const [rightDrivePercentage, setRightDrivePercentage] = useState();
    const [trueDrivePercentage, setTrueDrivePercentage] = useState();
    const [onePuttPercentage, setOnePuttPercentage] = useState();
    const [twoPuttPercentage, setTwoPuttPercentage] = useState();
    const [threePlusPuttPercentage, setThreePlusPuttPercentage] = useState();
    const [averagePar3Score, setAveragePar3Score] = useState();
    const [averagePar4Score, setAveragePar4Score] = useState();
    const [averagePar5Score, setAveragePar5Score] = useState();

    const holeScoreAverage = () => {
        setPlayerScoreAverage(playerScores.reduce((a,b) => (a+b)/playerScores.length).toFixed(2),0);
        setScoreToPar(playerScores.reduce((a,b) => a+b,0) - 72)
        console.log(playerScoreAverage);
    }

    const averagePuttsPerRound = () => {
        setPuttsAverage(putts.reduce((a,b) => (a+b)/putts.length).toFixed(2),0)
        console.log(puttsAverage);
    }

    const averageParScores = () => {
        if (par3ScoreArray.length > 0) {
            setAveragePar3Score(par3ScoreArray.reduce((a,b) => (a+b)/par3ScoreArray.length),0)
        } else if (par4ScoreArray.length > 0) {
            setAveragePar4Score(par4ScoreArray.reduce((a,b) => (a+b)/par4ScoreArray.length),0)
        } else if (par5ScoreArray.length > 0) {
            setAveragePar5Score(par5ScoreArray.reduce((a,b) => (a+b)/par5ScoreArray.length),0)
        }
    }

    const averageRoughShotsPerRound = () => {
        setRoughShotsAverage(roughShots.reduce((a,b) => (a+b)/roughShots.length),0)
        console.log(roughShotsAverage);
    }

    const averageChipsPerRound = () => {
        setChipsAverage(chips.reduce((a,b) => (a+b)/chips.length).toFixed(2),0)
        console.log(chipsAverage);
    }

    const gIRPercentage = () => {
        const gIRYes = [];
        gIRS.map((index) => {
            if (index == true) {
                gIRYes.push(index);
            }
        })
        setGIRSAverage(((gIRYes.length/gIRS.length)*100).toFixed(2)+"%");
    }

    const fairwayHitPercentage = () => {
        const fairwayHitTrue = [];
        fairwaysHit.map((index) => {
            if (index == true) {
                fairwayHitTrue.push(index);
            }
        })
        setFHAverage(((fairwayHitTrue.length/fairwaysHit.length)*100).toFixed(2) + "%");
    }

    const driveDirection = () => {
        const leftDrive = [];
        const rightDrive = [];
        const trueDrive = [];
        fairwaysHit.map((index) => {
            if (index == true) {
                trueDrive.push(index);
            } else if (index == "L") {
                leftDrive.push(index)
            } else {
                rightDrive.push(index);
            }
        })
        setLeftDrivePercentage(((leftDrive.length/fairwaysHit.length)*100).toFixed(2)+"%");
        setRightDrivePercentage(((rightDrive.length/fairwaysHit.length)*100).toFixed(2)+"%")
        setTrueDrivePercentage(((trueDrive.length/fairwaysHit.length)*100).toFixed(2)+"%")
    }

    const puttStrokeAverage = () => {
        const onePutts = [];
        const twoPutts = [];
        const threePlusPutts = [];
        putts.map((index) => {
            if (index === 1) {
                onePutts.push(index);
            } if (index === 2) {
                twoPutts.push(index);
            } if (index >= 3) {
                threePlusPutts.push(index);
            }
        })
        setOnePuttPercentage(((onePutts.length/putts.length)*100).toFixed(2) + "%")
        setTwoPuttPercentage(((twoPutts.length/putts.length)*100).toFixed(2) + "%")
        setThreePlusPuttPercentage(((threePlusPutts.length/putts.length)*100).toFixed(2) + "%")
    }

    const functions = () => {
        holeScoreAverage();
        averagePuttsPerRound();
        averageRoughShotsPerRound();
        averageChipsPerRound();
        averagePuttsPerRound();
        gIRPercentage();
        fairwayHitPercentage();
        puttStrokeAverage();
        averageParScores();
        driveDirection();
    }


    // par4Array.map((index) => {
    //     index.map((data) => {
    //         const newData = [data[0]]
    //         newData.map((stuff) => {
    //             setAveragePar4Score(par4Array.reduce((a,b) => (a+b)par4Array.length));
    //         })
    //     })
    // })

    const MyChart = new Chart({
        type: 'line',
        data: {
            labels: ['12/21', '12/24', '12/29', '12/31', '1/3'],
            datasets: [{
                label: 'Player Score',
                data: [81, 83, 80, 81, 79]
            }]
        }
    })

    return (
        <div className="Analyze">
            <div className="verticalDivOne">
                <PlayerTab />
                <div className="previousRoundsChartWrapper" onClick={functions}>
                    <div className="previousRoundsHeading">Recent Round Scores</div>
                    <canvas className="previousRoundsChart">
                        {/* <MyChart /> */}
                    </canvas>
                </div>
                <div className="driveDispersionChart" style={{flexDirection: "column"}}>
                    <div className="driveDispersionHeadings">
                        <h3>Left of Fairway</h3>
                        <h3>Fairway Hit/Straight</h3>
                        <h3>Right of Fairway</h3>
                    </div>
                    <div className="dispersionPercentages">
                        {/* <h3 className="driveDirectionHeading leftDrivePercentage">{leftDrivePercentage}</h3>
                        <h3 className="driveDirectionHeading straightDrivePercentage">{trueDrivePercentage}</h3>
                        <h3 className="driveDirectionHeading rightDrivePercentage">{rightDrivePercentage}</h3> */}
                        <h3 className="driveDirectionHeading leftDrivePercentage">16.7%</h3>
                        <h3 className="driveDirectionHeading straightDrivePercentage">36.4%</h3>
                        <h3 className="driveDirectionHeading rightDrivePercentage">46.9%</h3>
                    </div>
                    <div className="SVGHolder"></div>
                </div>
                <div className="puttPercentage">
                    <div className="puttPercentageHeadings">
                        <h3>1 Putts</h3>
                        <h3>2 Putts</h3>
                        <h3>3 Putts</h3>
                    </div>
                    <div className="numberOfPuttsWrapper">
                        {/* <div className="onePuttPercentage" style={{width: `${onePuttPercentage}`}}>{onePuttPercentage}</div>
                        <div className="twoPuttPercentage" style={{width: `${twoPuttPercentage}`}}>{twoPuttPercentage}</div>
                        <div className="threePlusPuttPercentage" style={{width: `${threePlusPuttPercentage}`}}>{threePlusPuttPercentage}</div> */}
                        <div className="onePuttPercentage" style={{width: '29.8%'}}>29.8%</div>
                        <div className="twoPuttPercentage" style={{width: '54%'}}>54%</div>
                        <div className="threePlusPuttPercentage" style={{width: '16.2%'}}>16.2%</div>
                    </div>
                </div>
            </div>
            <div className="verticalDivTwo">
                <div className="averagePlayerScore">
                    <div className="averagePlayerScoreHeading">Average Score</div>
                    <div className="averagePlayerScoreWrapper">
                        <div className="averageScore">
                            {/* <span className="averagePlayerScoreNumber">{playerScoreAverage}</span> */}
                            <span className="averagePlayerScoreNumber">81</span>
                            <span>Strokes Per Round</span>
                        </div>
                        <div className="averageScoreToPar">
                            {/* <span className="averagePlayerScoreNumber">{scoreToPar}</span> */}
                            <span className="averagePlayerScoreNumber">+9.6</span>
                            <span>Score to Par</span>
                        </div>
                    </div>
                </div>
                <div className="averageHoleParScore">
                    <div className="averageHoleParScoreHeading">Average Hole Scores</div>
                    <div className="parsWrapper">
                        <div className="parThree">
                            <div>Par 3</div>
                            {/* <h3>{averagePar3Score}</h3> */}
                            <div style={{fontSize: "1.8rem"}}>4.1</div>
                        </div>
                        <div className="parFour">
                            <div>Par 4</div>
                            {/* <h3>{averagePar4Score}</h3> */}
                            <div style={{fontSize: "1.8rem"}}>4.5</div>
                        </div>
                        <div className="parFive">
                            <div>Par 5</div>
                            {/* <h3>{averagePar5Score}</h3> */}
                            <div style={{fontSize: "1.8rem"}}>5.1</div>
                        </div>
                    </div>
                </div>
                <div className="GIRFHPercentage">
                    <div className="GIRPPercentage">
                        {/* <h3>{fHAverage}</h3> */}
                        <div style={{fontSize: "1.6rem"}}>68.9%<br />FH</div>
                    </div>
                    <div className="FHPercentage">
                        {/* <h3>{gIRSAverage}</h3> */}
                        <div style={{fontSize: "1.6rem"}}>63%<br />GIR</div>
                    </div>
                </div>
                <div className="strokesGainedBoxWrapper">
                    <h3>Strokes Gained</h3>
                    <div className="strokesGainedBox">
                        <div className="strokesGainedFH" style={{background: "lightgreen"}}>-0.2<br />Fairway Hit</div>
                        <div className="strokesGainedFNH" style={{background: "lightblue"}}>-1.1<br />Fairway Not Hit</div>
                        <div className="strokesGainedGIR" style={{background: "lightgreen"}}>-0.1<br />GIR</div>
                        <div className="strokesGainedNGIR" style={{background: "rgb(250, 106, 106)"}}>-2<br />Miss GIR</div>
                    </div>
                </div>
                <div className="chipsAndPuttsAverage">
                    <div className="chipsAndPuttsAverageHeading">Average Per Round</div>
                    <div className="chipsAndPuttsAverageWrapper">
                        <div className="chipsAverage">
                            {/* <h3>{chipsAverage}</h3>    */}
                            <div>12<br />Chips</div>
                        </div>
                        <div className="puttsAverage">
                            {/* <h3>{puttsAverage}</h3>    */}
                            <div>31<br />Putts</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analyze;