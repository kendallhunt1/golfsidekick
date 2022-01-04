import React, {useState} from 'react';
import PlayerTab from './PlayerTab';
import '../Styles/AddRound.css'

const AddRound = ({setDaHoleNumber, daHoleNumber, setHole1Par, setHole1Score, setHole1Layout, setHole1Distance, setHole1FH, setHole1GIR, setHole1RS, setHole1CS, setHole1Putts, setHole2Par,
    hole1Par, hole2Par, hole3Par, hole4Par, hole5Par, hole6Par, hole7Par, hole8Par, hole9Par, hole10Par, hole11Par, hole12Par, hole13Par, hole14Par, hole15Par, hole16Par, hole17Par, hole18Par,
    setHole3Par, setHole4Par, setHole5Par, setHole6Par, setHole7Par, setHole8Par, setHole9Par, setHole10Par, setHole11Par, setHole12Par, setHole13Par, setHole14Par, setHole15Par, setHole16Par, setHole17Par, setHole18Par,
    hole1Score, hole2Score, hole3Score, hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score, hole10Score, hole11Score, hole12Score, hole13Score, hole14Score, hole15Score, hole16Score, hole17Score, hole18Score, 
    hole1Layout, hole2Layout, hole3Layout, hole4Layout, hole5Layout, hole6Layout, hole7Layout, hole8Layout, hole9Layout, hole10Layout, hole11Layout, hole12Layout, hole13Layout, hole14Layout, hole15Layout, hole16Layout, hole17Layout, hole18Layout,
    hole1Distance, hole2Distance, hole3Distance, hole4Distance, hole5Distance, hole6Distance, hole7Distance, hole8Distance, hole9Distance, hole10Distance, hole11Distance, hole12Distance, hole13Distance, hole14Distance, hole15Distance, hole16Distance, hole17Distance, hole18Distance,
    hole1FH, hole2FH, hole3FH, hole4FH, hole5FH, hole6FH, hole7FH, hole8FH, hole9FH, hole10FH, hole11FH, hole12FH, hole13FH, hole14FH, hole15FH, hole16FH, hole17FH, hole18FH, 
    hole1GIR, hole2GIR, hole3GIR, hole4GIR, hole5GIR, hole6GIR, hole7GIR, hole8GIR, hole9GIR, hole10GIR, hole11GIR, hole12GIR, hole13GIR, hole14GIR, hole15GIR, hole16GIR, hole17GIR, hole18GIR, 
    hole1RS, hole2RS, hole3RS, hole4RS, hole5RS, hole6RS, hole7RS, hole8RS, hole9RS, hole10RS, hole11RS, hole12RS, hole13RS, hole14RS, hole15RS, hole16RS, hole17RS, hole18RS,
    hole1CS, hole2CS, hole3CS, hole4CS, hole5CS, hole6CS, hole7CS, hole8CS, hole9CS, hole10CS, hole11CS, hole12CS, hole13CS, hole14CS, hole15CS, hole16CS, hole17CS, hole18CS,
    hole1Putts, hole2Putts, hole3Putts, hole4Putts, hole5Putts, hole6Putts, hole7Putts, hole8Putts, hole9Putts, hole10Putts, hole11Putts, hole12Putts, hole13Putts, hole14Putts, hole15Putts, hole16Putts, hole17Putts, hole18Putts,
    updateHoleData}) => {

    let holePar = 4;
    let holeDistance = 300;
    let holeLayout = "S";
    let playerScore = 3;
    let fairwayHit = "Y";
    let greenInRegulation = "Y";
    let numberOfShotsFromRough = 0;
    let numberOfChips = 0;
    let numberOfPutts = 1;

    const [holeNumber, setHoleNumber] = useState("1");

    const [theHole1Score, setTheHole1Score] = useState('');
    const [theHole1Layout, setTheHole1Layout] = useState('');
    const [theHole1Distance, setTheHole1Distance] = useState('');
    const [theHole1FH, setTheHole1FH] = useState('');
    const [theHole1GIR, setTheHole1GIR] = useState('');
    const [theHole1RS, setTheHole1RS] = useState('');
    const [theHole1CS, setTheHole1CS] = useState('');
    const [theHole1Putts, setTheHole1Putts] = useState('');

    const [theHole2Score, setTheHole2Score] = useState('');
    const [theHole2Layout, setTheHole2Layout] = useState('');
    const [theHole2Distance, setTheHole2Distance] = useState('');
    const [theHole2FH, setTheHole2FH] = useState('');
    const [theHole2GIR, setTheHole2GIR] = useState('');
    const [theHole2RS, setTheHole2RS] = useState('');
    const [theHole2CS, setTheHole2CS] = useState('');
    const [theHole2Putts, setTheHole2Putts] = useState('');

    const [theHole3Score, setTheHole3Score] = useState('');
    const [theHole3Layout, setTheHole3Layout] = useState('');
    const [theHole3Distance, setTheHole3Distance] = useState('');
    const [theHole3FH, setTheHole3FH] = useState('');
    const [theHole3GIR, setTheHole3GIR] = useState('');
    const [theHole3RS, setTheHole3RS] = useState('');
    const [theHole3CS, setTheHole3CS] = useState('');
    const [theHole3Putts, setTheHole3Putts] = useState('');

    const [theHole4Score, setTheHole4Score] = useState('');
    const [theHole4Layout, setTheHole4Layout] = useState('');
    const [theHole4Distance, setTheHole4Distance] = useState('');
    const [theHole4FH, setTheHole4FH] = useState('');
    const [theHole4GIR, setTheHole4GIR] = useState('');
    const [theHole4RS, setTheHole4RS] = useState('');
    const [theHole4CS, setTheHole4CS] = useState('');
    const [theHole4Putts, setTheHole4Putts] = useState('');

    const [theHole5Score, setTheHole5Score] = useState('');
    const [theHole5Layout, setTheHole5Layout] = useState('');
    const [theHole5Distance, setTheHole5Distance] = useState('');
    const [theHole5FH, setTheHole5FH] = useState('');
    const [theHole5GIR, setTheHole5GIR] = useState('');
    const [theHole5RS, setTheHole5RS] = useState('');
    const [theHole5CS, setTheHole5CS] = useState('');
    const [theHole5Putts, setTheHole5Putts] = useState('');

    const [theHole6Score, setTheHole6Score] = useState('');
    const [theHole6Layout, setTheHole6Layout] = useState('');
    const [theHole6Distance, setTheHole6Distance] = useState('');
    const [theHole6FH, setTheHole6FH] = useState('');
    const [theHole6GIR, setTheHole6GIR] = useState('');
    const [theHole6RS, setTheHole6RS] = useState('');
    const [theHole6CS, setTheHole6CS] = useState('');
    const [theHole6Putts, setTheHole6Putts] = useState('');

    const [theHole7Score, setTheHole7Score] = useState('');
    const [theHole7Layout, setTheHole7Layout] = useState('');
    const [theHole7Distance, setTheHole7Distance] = useState('');
    const [theHole7FH, setTheHole7FH] = useState('');
    const [theHole7GIR, setTheHole7GIR] = useState('');
    const [theHole7RS, setTheHole7RS] = useState('');
    const [theHole7CS, setTheHole7CS] = useState('');
    const [theHole7Putts, setTheHole7Putts] = useState('');

    const [theHole8Score, setTheHole8Score] = useState('');
    const [theHole8Layout, setTheHole8Layout] = useState('');
    const [theHole8Distance, setTheHole8Distance] = useState('');
    const [theHole8FH, setTheHole8FH] = useState('');
    const [theHole8GIR, setTheHole8GIR] = useState('');
    const [theHole8RS, setTheHole8RS] = useState('');
    const [theHole8CS, setTheHole8CS] = useState('');
    const [theHole8Putts, setTheHole8Putts] = useState('');

    const [theHole9Score, setTheHole9Score] = useState('');
    const [theHole9Layout, setTheHole9Layout] = useState('');
    const [theHole9Distance, setTheHole9Distance] = useState('');
    const [theHole9FH, setTheHole9FH] = useState('');
    const [theHole9GIR, setTheHole9GIR] = useState('');
    const [theHole9RS, setTheHole9RS] = useState('');
    const [theHole9CS, setTheHole9CS] = useState('');
    const [theHole9Putts, setTheHole9Putts] = useState('');

    const [theHole10Score, setTheHole10Score] = useState('');
    const [theHole10Layout, setTheHole10Layout] = useState('');
    const [theHole10Distance, setTheHole10Distance] = useState('');
    const [theHole10FH, setTheHole10FH] = useState('');
    const [theHole10GIR, setTheHole10GIR] = useState('');
    const [theHole10RS, setTheHole10RS] = useState('');
    const [theHole10CS, setTheHole10CS] = useState('');
    const [theHole10Putts, setTheHole10Putts] = useState('');

    const [theHole11Score, setTheHole11Score] = useState('');
    const [theHole11Layout, setTheHole11Layout] = useState('');
    const [theHole11Distance, setTheHole11Distance] = useState('');
    const [theHole11FH, setTheHole11FH] = useState('');
    const [theHole11GIR, setTheHole11GIR] = useState('');
    const [theHole11RS, setTheHole11RS] = useState('');
    const [theHole11CS, setTheHole11CS] = useState('');
    const [theHole11Putts, setTheHole11Putts] = useState('');

    const [theHole12Score, setTheHole12Score] = useState('');
    const [theHole12Layout, setTheHole12Layout] = useState('');
    const [theHole12Distance, setTheHole12Distance] = useState('');
    const [theHole12FH, setTheHole12FH] = useState('');
    const [theHole12GIR, setTheHole12GIR] = useState('');
    const [theHole12RS, setTheHole12RS] = useState('');
    const [theHole12CS, setTheHole12CS] = useState('');
    const [theHole12Putts, setTheHole12Putts] = useState('');

    const [theHole13Score, setTheHole13Score] = useState('');
    const [theHole13Layout, setTheHole13Layout] = useState('');
    const [theHole13Distance, setTheHole13Distance] = useState('');
    const [theHole13FH, setTheHole13FH] = useState('');
    const [theHole13GIR, setTheHole13GIR] = useState('');
    const [theHole13RS, setTheHole13RS] = useState('');
    const [theHole13CS, setTheHole13CS] = useState('');
    const [theHole13Putts, setTheHole13Putts] = useState('');

    const [theHole14Score, setTheHole14Score] = useState('');
    const [theHole14Layout, setTheHole14Layout] = useState('');
    const [theHole14Distance, setTheHole14Distance] = useState('');
    const [theHole14FH, setTheHole14FH] = useState('');
    const [theHole14GIR, setTheHole14GIR] = useState('');
    const [theHole14RS, setTheHole14RS] = useState('');
    const [theHole14CS, setTheHole14CS] = useState('');
    const [theHole14Putts, setTheHole14Putts] = useState('');

    const [theHole15Score, setTheHole15Score] = useState('');
    const [theHole15Layout, setTheHole15Layout] = useState('');
    const [theHole15Distance, setTheHole15Distance] = useState('');
    const [theHole15FH, setTheHole15FH] = useState('');
    const [theHole15GIR, setTheHole15GIR] = useState('');
    const [theHole15RS, setTheHole15RS] = useState('');
    const [theHole15CS, setTheHole15CS] = useState('');
    const [theHole15Putts, setTheHole15Putts] = useState('');

    const [theHole16Score, setTheHole16Score] = useState('');
    const [theHole16Layout, setTheHole16Layout] = useState('');
    const [theHole16Distance, setTheHole16Distance] = useState('');
    const [theHole16FH, setTheHole16FH] = useState('');
    const [theHole16GIR, setTheHole16GIR] = useState('');
    const [theHole16RS, setTheHole16RS] = useState('');
    const [theHole16CS, setTheHole16CS] = useState('');
    const [theHole16Putts, setTheHole16Putts] = useState('');

    const [theHole17Score, setTheHole17Score] = useState('');
    const [theHole17Layout, setTheHole17Layout] = useState('');
    const [theHole17Distance, setTheHole17Distance] = useState('');
    const [theHole17FH, setTheHole17FH] = useState('');
    const [theHole17GIR, setTheHole17GIR] = useState('');
    const [theHole17RS, setTheHole17RS] = useState('');
    const [theHole17CS, setTheHole17CS] = useState('');
    const [theHole17Putts, setTheHole17Putts] = useState('');

    const [theHole18Score, setTheHole18Score] = useState('');
    const [theHole18Layout, setTheHole18Layout] = useState('');
    const [theHole18Distance, setTheHole18Distance] = useState('');
    const [theHole18FH, setTheHole18FH] = useState('');
    const [theHole18GIR, setTheHole18GIR] = useState('');
    const [theHole18RS, setTheHole18RS] = useState('');
    const [theHole18CS, setTheHole18CS] = useState('');
    const [theHole18Putts, setTheHole18Putts] = useState('');
    
    const setScorecardUI = () => {
        updateHoleData(daHoleNumber, holePar, playerScore, holeLayout, holeDistance, fairwayHit, greenInRegulation, numberOfShotsFromRough, numberOfChips, numberOfPutts);
        if (daHoleNumber == 1) {
            setTheHole1Score(playerScore);
            setHole1Par(holePar);
            setTheHole1Layout(holeLayout);
            setTheHole1Distance(holeDistance);
            setTheHole1FH(fairwayHit);
            setTheHole1GIR(greenInRegulation);
            setTheHole1RS(numberOfShotsFromRough);
            setTheHole1CS(numberOfChips);
            setTheHole1Putts(numberOfPutts);
            console.log(playerScore);
        } if (daHoleNumber == 2) {
            setTheHole2Score(playerScore);
            setHole2Par(holePar);
            setTheHole2Layout(holeLayout);
            setTheHole2Distance(holeDistance);
            setTheHole2FH(fairwayHit);
            setTheHole2GIR(greenInRegulation);
            setTheHole2RS(numberOfShotsFromRough);
            setTheHole2CS(numberOfChips);
            setTheHole2Putts(numberOfPutts);
            console.log(playerScore);
        } if (daHoleNumber == 3) {
            setTheHole3Score(playerScore);
            setHole3Par(holePar);
            setTheHole3Layout(holeLayout);
            setTheHole3Distance(holeDistance);
            setTheHole3FH(fairwayHit);
            setTheHole3GIR(greenInRegulation);
            setTheHole3RS(numberOfShotsFromRough);
            setTheHole3CS(numberOfChips);
            setTheHole3Putts(numberOfPutts);
            console.log(playerScore);
        } if (daHoleNumber == 4) {
            setTheHole4Score(playerScore);
            setHole4Par(holePar);
            setTheHole4Layout(holeLayout);
            setTheHole4Distance(holeDistance);
            setTheHole4FH(fairwayHit);
            setTheHole4GIR(greenInRegulation);
            setTheHole4RS(numberOfShotsFromRough);
            setTheHole4CS(numberOfChips);
            setTheHole4Putts(numberOfPutts);
            console.log(playerScore);
        } if (daHoleNumber == 5) {
            setTheHole5Score(playerScore);
            setHole5Par(holePar);
            setTheHole5Layout(holeLayout);
            setTheHole5Distance(holeDistance);
            setTheHole5FH(fairwayHit);
            setTheHole5GIR(greenInRegulation);
            setTheHole5RS(numberOfShotsFromRough);
            setTheHole5CS(numberOfChips);
            setTheHole5Putts(numberOfPutts);
            console.log(playerScore);
        } if (daHoleNumber == 6) {
            setTheHole6Score(playerScore);
            setHole6Par(holePar);
            setTheHole6Layout(holeLayout);
            setTheHole6Distance(holeDistance);
            setTheHole6FH(fairwayHit);
            setTheHole6GIR(greenInRegulation);
            setTheHole6RS(numberOfShotsFromRough);
            setTheHole6CS(numberOfChips);
            setTheHole6Putts(numberOfPutts);
            console.log(playerScore);
        } if (daHoleNumber == 7) {
            setTheHole7Score(playerScore);
            setHole7Par(holePar);
            setTheHole7Layout(holeLayout);
            setTheHole7Distance(holeDistance);
            setTheHole7FH(fairwayHit);
            setTheHole7GIR(greenInRegulation);
            setTheHole7RS(numberOfShotsFromRough);
            setTheHole7CS(numberOfChips);
            setTheHole7Putts(numberOfPutts);
            console.log(playerScore);
        } if (daHoleNumber == 8) {
            setTheHole8Score(playerScore);
            setHole8Par(holePar);
            setTheHole8Layout(holeLayout);
            setTheHole8Distance(holeDistance);
            setTheHole8FH(fairwayHit);
            setTheHole8GIR(greenInRegulation);
            setTheHole8RS(numberOfShotsFromRough);
            setTheHole8CS(numberOfChips);
            setTheHole8Putts(numberOfPutts);
            console.log(playerScore);
        } if (daHoleNumber == 9) {
            setTheHole9Score(playerScore);
            setHole9Par(holePar);
            setTheHole9Layout(holeLayout);
            setTheHole9Distance(holeDistance);
            setTheHole9FH(fairwayHit);
            setTheHole9GIR(greenInRegulation);
            setTheHole9RS(numberOfShotsFromRough);
            setTheHole9CS(numberOfChips);
            setTheHole9Putts(numberOfPutts);
            console.log(playerScore);
        } if (daHoleNumber == 10) {
            setTheHole10Score(playerScore);
            setHole10Par(holePar);
            setTheHole10Layout(holeLayout);
            setTheHole10Distance(holeDistance);
            setTheHole10FH(fairwayHit);
            setTheHole10GIR(greenInRegulation);
            setTheHole10RS(numberOfShotsFromRough);
            setTheHole10CS(numberOfChips);
            setTheHole10Putts(numberOfPutts);
        } if (daHoleNumber == 10) {
            setTheHole10Score(playerScore);
            setHole10Par(holePar);
            setTheHole10Layout(holeLayout);
            setTheHole10Distance(holeDistance);
            setTheHole10FH(fairwayHit);
            setTheHole10GIR(greenInRegulation);
            setTheHole10RS(numberOfShotsFromRough);
            setTheHole10CS(numberOfChips);
            setTheHole10Putts(numberOfPutts);
        } if (daHoleNumber == 11) {
            setTheHole11Score(playerScore);
            setHole11Par(holePar);
            setTheHole11Layout(holeLayout);
            setTheHole11Distance(holeDistance);
            setTheHole11FH(fairwayHit);
            setTheHole11GIR(greenInRegulation);
            setTheHole11RS(numberOfShotsFromRough);
            setTheHole11CS(numberOfChips);
            setTheHole11Putts(numberOfPutts);
        } if (daHoleNumber == 12) {
            setTheHole12Score(playerScore);
            setHole12Par(holePar);
            setTheHole12Layout(holeLayout);
            setTheHole12Distance(holeDistance);
            setTheHole12FH(fairwayHit);
            setTheHole12GIR(greenInRegulation);
            setTheHole12RS(numberOfShotsFromRough);
            setTheHole12CS(numberOfChips);
            setTheHole12Putts(numberOfPutts);
        } if (daHoleNumber == 13) {
            setTheHole13Score(playerScore);
            setHole13Par(holePar);
            setTheHole13Layout(holeLayout);
            setTheHole13Distance(holeDistance);
            setTheHole13FH(fairwayHit);
            setTheHole13GIR(greenInRegulation);
            setTheHole13RS(numberOfShotsFromRough);
            setTheHole13CS(numberOfChips);
            setTheHole13Putts(numberOfPutts);
        } if (daHoleNumber == 14) {
            setTheHole14Score(playerScore);
            setHole14Par(holePar);
            setTheHole14Layout(holeLayout);
            setTheHole14Distance(holeDistance);
            setTheHole14FH(fairwayHit);
            setTheHole14GIR(greenInRegulation);
            setTheHole14RS(numberOfShotsFromRough);
            setTheHole14CS(numberOfChips);
            setTheHole14Putts(numberOfPutts);
        } if (daHoleNumber == 15) {
            setTheHole15Score(playerScore);
            setHole15Par(holePar);
            setTheHole15Layout(holeLayout);
            setTheHole15Distance(holeDistance);
            setTheHole15FH(fairwayHit);
            setTheHole15GIR(greenInRegulation);
            setTheHole15RS(numberOfShotsFromRough);
            setTheHole15CS(numberOfChips);
            setTheHole15Putts(numberOfPutts);
        } if (daHoleNumber == 16) {
            setTheHole16Score(playerScore);
            setHole16Par(holePar);
            setTheHole16Layout(holeLayout);
            setTheHole16Distance(holeDistance);
            setTheHole16FH(fairwayHit);
            setTheHole16GIR(greenInRegulation);
            setTheHole16RS(numberOfShotsFromRough);
            setTheHole16CS(numberOfChips);
            setTheHole16Putts(numberOfPutts);
        } if (daHoleNumber == 17) {
            setTheHole17Score(playerScore);
            setHole17Par(holePar);
            setTheHole17Layout(holeLayout);
            setTheHole17Distance(holeDistance);
            setTheHole17FH(fairwayHit);
            setTheHole17GIR(greenInRegulation);
            setTheHole17RS(numberOfShotsFromRough);
            setTheHole17CS(numberOfChips);
            setTheHole17Putts(numberOfPutts);
        } if (daHoleNumber == 18) {
            setTheHole18Score(playerScore);
            setHole18Par(holePar);
            setTheHole18Layout(holeLayout);
            setTheHole18Distance(holeDistance);
            setTheHole18FH(fairwayHit);
            setTheHole18GIR(greenInRegulation);
            setTheHole18RS(numberOfShotsFromRough);
            setTheHole18CS(numberOfChips);
            setTheHole18Putts(numberOfPutts);
        }
    }

    return (
        <div className="holeInformation">
            <div className="verticalWrapper">
            <PlayerTab />
            <div className="enterHoleInformationWrapper">
                <div className="enterHoleInformationFields">

                <div className="holeInputHorizontal">
                    <label>Select Hole:</label>
                    <select id="holeNumber" onChange={(e) => {setDaHoleNumber(parseInt(e.target.value))}}>
                        <option className="holeNumberButton" value="1">1</option>
                        <option className="holeNumberButton" value="2">2</option>
                        <option className="holeNumberButton" value="3">3</option>
                        <option className="holeNumberButton" value="4">4</option>
                        <option className="holeNumberButton" value="5">5</option>
                        <option className="holeNumberButton" value="6">6</option>
                        <option className="holeNumberButton" value="7">7</option>
                        <option className="holeNumberButton" value="8">8</option>
                        <option className="holeNumberButton" value="9">9</option>
                        <option className="holeNumberButton" value="10">10</option>
                        <option className="holeNumberButton" value="11">11</option>
                        <option className="holeNumberButton" value="12">12</option>
                        <option className="holeNumberButton" value="13">13</option>
                        <option className="holeNumberButton" value="14">14</option>
                        <option className="holeNumberButton" value="15">15</option>
                        <option className="holeNumberButton" value="16">16</option>
                        <option className="holeNumberButton" value="17">17</option>
                        <option className="holeNumberButton" value="18">18</option>
                    </select>
                </div>

                    <div className="holeInputHorizontal">
                        <label for="par">Hole Par:</label>
                        <select id="par" name="par" id="dataForms" onChange={(e) => {holePar = e.target.value}}>
                            <option value="3">3</option>
                            <option value="4" selected>4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="holeInputHorizontal">
                        <label id="yourScore">Your Score:</label>
                        <input type="text" id="dataForms" onChange={(e) => {playerScore = parseInt(e.target.value)}}></input>
                    </div>

                    <div className="holeInputHorizontal">
                        <label id="holeDistance">Hole Distance:</label>
                        <input type="text" id="dataForms" onChange={(e) => {holeDistance = e.target.value}}></input>
                    </div>

                    <div className="holeInputHorizontal">
                        <label for="holeLayout">Hole Layout:</label>
                        <select id="holeLayout" name="holeLayout" id="dataForms" onChange={(e) => {holeLayout = e.target.value}}>
                            <option value="S" selected>Straight</option>
                            <option value="DLL">Dog Leg Left</option>
                            <option value="DLR">Dog Leg Right</option>
                        </select>
                    </div>

                    <div className="holeInputHorizontal">
                        <div className="fairwayHitCheckBox">
                            <label id="fairwayHit">Fairway Hit?</label>
                            <select id="dataForms" onChange={(e) => {fairwayHit = e.target.value}}>
                                <option id="Y" value="true" selected>Yes</option>
                                <option id="L" value="L" >Left</option>
                                <option id="R" value="R" >Right</option>
                                <option id="N/A" value ="N/A">N/A</option>
                            </select>
                        </div>
                    </div>

                    <div className="holeInputHorizontal">
                        <label id="gir">Green in Regulation?</label>
                        <select id="dataForms" onChange={(e) => {greenInRegulation = e.target.value}}>
                            <option id="Y" value="Y" selected>Yes</option>
                            <option id="N" value="N" >No</option>
                        </select>
                    </div>
                
                    <div className="holeInputHorizontal">
                        <label id="shotsFromRough"># of Shots From Rough:</label>
                        <input type="text" id="dataForms" onChange={(e) => {numberOfShotsFromRough = e.target.value}}></input>
                    </div>

                    <div className="holeInputHorizontal">
                        <label id="numberOfChips"># of Chips:</label>
                        <input type="text" id="dataForms" onChange={(e) => {numberOfChips = e.target.value}}></input>
                    </div>
                    
                    <div className="holeInputHorizontal">
                        <label id="numberOfPutts">Number of Putts:</label>
                        <input type="text" id="dataForms" onChange={(e) => {numberOfPutts = e.target.value}}></input>
                    </div>
                    <div className="buttonWrapper">
                        <button className="submitHole" onClick={setScorecardUI}>Submit Hole</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="holeAndScorecardWrapper">
                <div className="selectHole">
                    <div className="holeNumberDisplay">
                        <h2>HOLE NUMBER: {daHoleNumber}</h2>
                    </div>
                </div>
                <div className="scoreCardWrapper">
                    <div className="scorecard">
                        <article className="allHoleInformation">
                            <div className="hole columnHeading">
                                <p className="spanOne">Hole</p>
                                <div className="middleSpan">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                    <span>11</span>
                                    <span>12</span>
                                    <span>13</span>
                                    <span>14</span>
                                    <span>15</span>
                                    <span>16</span>
                                    <span>17</span>
                                    <span>18</span>
                                </div>
                                <p className="spanTwo">Out</p>
                            </div>
                            <div className="par columnHeading">
                                <p className="spanOne">Par</p>
                                <div className="middleSpan">
                                    <span>{hole1Par}</span>
                                    <span>{hole2Par}</span>
                                    <span>{hole3Par}</span>
                                    <span>{hole4Par}</span>
                                    <span>{hole5Par}</span>
                                    <span>{hole6Par}</span>
                                    <span>{hole7Par}</span>
                                    <span>{hole8Par}</span>
                                    <span>{hole9Par}</span>
                                    <span>{hole10Par}</span>
                                    <span>{hole11Par}</span>
                                    <span>{hole12Par}</span>
                                    <span>{hole13Par}</span>
                                    <span>{hole14Par}</span>
                                    <span>{hole15Par}</span>
                                    <span>{hole16Par}</span>
                                    <span>{hole17Par}</span>
                                    <span>{hole18Par}</span>
                                </div>
                                <p className="spanTwo">72</p>
                            </div>
                            <div className="score columnHeading" style={{background: "#8A2BE2"}}>
                                <p className="spanOne">Score</p>
                                <div className="middleSpan">
                                    <span>{theHole1Score}</span>
                                    <span>{theHole2Score}</span>
                                    <span>{theHole3Score}</span>
                                    <span>{theHole4Score}</span>
                                    <span>{theHole5Score}</span>
                                    <span>{theHole6Score}</span>
                                    <span>{theHole7Score}</span>
                                    <span>{theHole8Score}</span>
                                    <span>{theHole9Score}</span>
                                    <span>{theHole10Score}</span>
                                    <span>{theHole11Score}</span>
                                    <span>{theHole12Score}</span>
                                    <span>{theHole13Score}</span>
                                    <span>{theHole14Score}</span>
                                    <span>{theHole15Score}</span>
                                    <span>{theHole16Score}</span>
                                    <span>{theHole17Score}</span>
                                    <span>{theHole18Score}</span>
                                </div>
                                <p className="spanTwo">72</p>
                            </div>
                                <div className="holeDistanceColumn columnHeading" style={{background: "white"}}>
                                    <p className="spanOne">Hole Distance</p>
                                    <div className="middleSpan">
                                        <span className="holeDistanceSpan">{theHole1Distance}</span>
                                        <span className="holeDistanceSpan">{theHole2Distance}</span>
                                        <span className="holeDistanceSpan">{theHole3Distance}</span>
                                        <span className="holeDistanceSpan">{theHole4Distance}</span>
                                        <span className="holeDistanceSpan">{theHole5Distance}</span>
                                        <span className="holeDistanceSpan">{theHole6Distance}</span>
                                        <span className="holeDistanceSpan">{theHole7Distance}</span>
                                        <span className="holeDistanceSpan">{theHole8Distance}</span>
                                        <span className="holeDistanceSpan">{theHole9Distance}</span>
                                        <span className="holeDistanceSpan">{theHole10Distance}</span>
                                        <span className="holeDistanceSpan">{theHole11Distance}</span>
                                        <span className="holeDistanceSpan">{theHole12Distance}</span>
                                        <span className="holeDistanceSpan">{theHole13Distance}</span>
                                        <span className="holeDistanceSpan">{theHole14Distance}</span>
                                        <span className="holeDistanceSpan">{theHole15Distance}</span>
                                        <span className="holeDistanceSpan">{theHole16Distance}</span>
                                        <span className="holeDistanceSpan">{theHole17Distance}</span>
                                        <span className="holeDistanceSpan">{theHole18Distance}</span>
                                    </div>
                                    <p className="spanTwo"></p>
                                </div>
                                <div className="holeLayoutColumn columnHeading" style={{background: "white"}}>
                                    <p className="spanOne">Hole Layout</p>
                                    <div className="middleSpan">
                                        <span className="letterValue">{theHole1Layout}</span>
                                        <span className="letterValue">{theHole2Layout}</span>
                                        <span className="letterValue">{theHole3Layout}</span>
                                        <span className="letterValue">{theHole4Layout}</span>
                                        <span className="letterValue">{theHole5Layout}</span>
                                        <span className="letterValue">{theHole6Layout}</span>
                                        <span className="letterValue">{theHole7Layout}</span>
                                        <span className="letterValue">{theHole8Layout}</span>
                                        <span className="letterValue">{theHole9Layout}</span>
                                        <span className="letterValue">{theHole10Layout}</span>
                                        <span className="letterValue">{theHole11Layout}</span>
                                        <span className="letterValue">{theHole12Layout}</span>
                                        <span className="letterValue">{theHole13Layout}</span>
                                        <span className="letterValue">{theHole14Layout}</span>
                                        <span className="letterValue">{theHole15Layout}</span>
                                        <span className="letterValue">{theHole16Layout}</span>
                                        <span className="letterValue">{theHole17Layout}</span>
                                        <span className="letterValue">{theHole18Layout}</span>
                                    </div>
                                    <p className="spanTwo"></p>
                                </div>
                                <div className="fairwayHitColumn columnHeading" style={{background: "white"}}>
                                    <p className="spanOne">FH</p>
                                    <div className="middleSpan">
                                        <span className="letterValue">{theHole1FH}</span>
                                        <span className="letterValue">{theHole2FH}</span>
                                        <span className="letterValue">{theHole3FH}</span>
                                        <span className="letterValue">{theHole4FH}</span>
                                        <span className="letterValue">{theHole5FH}</span>
                                        <span className="letterValue">{theHole6FH}</span>
                                        <span className="letterValue">{theHole7FH}</span>
                                        <span className="letterValue">{theHole8FH}</span>
                                        <span className="letterValue">{theHole9FH}</span>
                                        <span className="letterValue">{theHole10FH}</span>
                                        <span className="letterValue">{theHole11FH}</span>
                                        <span className="letterValue">{theHole12FH}</span>
                                        <span className="letterValue">{theHole13FH}</span>
                                        <span className="letterValue">{theHole14FH}</span>
                                        <span className="letterValue">{theHole15FH}</span>
                                        <span className="letterValue">{theHole16FH}</span>
                                        <span className="letterValue">{theHole17FH}</span>
                                        <span className="letterValue">{theHole18FH}</span>
                                    </div>
                                    <p className="spanTwo"></p>
                                </div>
                                <div className="girColumn columnHeading" style={{background: "white"}}>
                                    <p className="spanOne">GIR</p>
                                    <div className="middleSpan">
                                        <span className="letterValue">{theHole1GIR}</span>
                                        <span className="letterValue">{theHole2GIR}</span>
                                        <span className="letterValue">{theHole3GIR}</span>
                                        <span className="letterValue">{theHole4GIR}</span>
                                        <span className="letterValue">{theHole5GIR}</span>
                                        <span className="letterValue">{theHole6GIR}</span>
                                        <span className="letterValue">{theHole7GIR}</span>
                                        <span className="letterValue">{theHole8GIR}</span>
                                        <span className="letterValue">{theHole9GIR}</span>
                                        <span className="letterValue">{theHole10GIR}</span>
                                        <span className="letterValue">{theHole11GIR}</span>
                                        <span className="letterValue">{theHole12GIR}</span>
                                        <span className="letterValue">{theHole13GIR}</span>
                                        <span className="letterValue">{theHole14GIR}</span>
                                        <span className="letterValue">{theHole15GIR}</span>
                                        <span className="letterValue">{theHole16GIR}</span>
                                        <span className="letterValue">{theHole17GIR}</span>
                                        <span className="letterValue">{theHole18GIR}</span>
                                    </div>
                                    <p className="spanTwo"></p>
                                </div>
                                <div className="roughShotsColumn columnHeading" style={{background: "white"}}>
                                    <p className="spanOne">Rough Shots</p>
                                    <div className="middleSpan">
                                        <span>{theHole1RS}</span>
                                        <span>{theHole2RS}</span>
                                        <span>{theHole3RS}</span>
                                        <span>{theHole4RS}</span>
                                        <span>{theHole5RS}</span>
                                        <span>{theHole6RS}</span>
                                        <span>{theHole7RS}</span>
                                        <span>{theHole8RS}</span>
                                        <span>{theHole9RS}</span>
                                        <span>{theHole10RS}</span>
                                        <span>{theHole11RS}</span>
                                        <span>{theHole12RS}</span>
                                        <span>{theHole13RS}</span>
                                        <span>{theHole14RS}</span>
                                        <span>{theHole15RS}</span>
                                        <span>{theHole16RS}</span>
                                        <span>{theHole17RS}</span>
                                        <span>{theHole18RS}</span>
                                    </div>
                                    <p className="spanTwo"></p>
                                </div>
                                <div className="chipShotsColumn columnHeading" style={{background: "white"}}>
                                    <p className="spanOne">Chip Shots</p>
                                    <div className="middleSpan">
                                        <span>{theHole1CS}</span>
                                        <span>{theHole2CS}</span>
                                        <span>{theHole3CS}</span>
                                        <span>{theHole4CS}</span>
                                        <span>{theHole5CS}</span>
                                        <span>{theHole6CS}</span>
                                        <span>{theHole7CS}</span>
                                        <span>{theHole8CS}</span>
                                        <span>{theHole9CS}</span>
                                        <span>{theHole10CS}</span>
                                        <span>{theHole11CS}</span>
                                        <span>{theHole12CS}</span>
                                        <span>{theHole13CS}</span>
                                        <span>{theHole14CS}</span>
                                        <span>{theHole15CS}</span>
                                        <span>{theHole16CS}</span>
                                        <span>{theHole17CS}</span>
                                        <span>{theHole18CS}</span>
                                    </div>
                                    <p className="spanTwo"></p>
                                </div>
                                <div className="puttsNumberColumn columnHeading" style={{background: "white"}}>
                                    <p className="spanOne">Putts</p>
                                    <div className="middleSpan">
                                        <span>{theHole1Putts}</span>
                                        <span>{theHole2Putts}</span>
                                        <span>{theHole3Putts}</span>
                                        <span>{theHole4Putts}</span>
                                        <span>{theHole5Putts}</span>
                                        <span>{theHole6Putts}</span>
                                        <span>{theHole7Putts}</span>
                                        <span>{theHole8Putts}</span>
                                        <span>{theHole9Putts}</span>
                                        <span>{theHole10Putts}</span>
                                        <span>{theHole11Putts}</span>
                                        <span>{theHole12Putts}</span>
                                        <span>{theHole13Putts}</span>
                                        <span>{theHole14Putts}</span>
                                        <span>{theHole15Putts}</span>
                                        <span>{theHole16Putts}</span>
                                        <span>{theHole17Putts}</span>
                                        <span>{theHole18Putts}</span>
                                    </div>
                                    <p className="spanTwo"></p>
                                </div>
                        </article>
                    </div>
                </div>
            </div>
            {/* <h3>Score Average: {pleaseWork}</h3>
            <h3>Fairways Hit: {amountOfFairwaysHit}</h3>
            <h3>Greens in Regulation: {amountOfGirs}</h3>
            <h3>Average # of Shots From Rough: {roughShotsAverage}</h3>
            <h3>Average # of Chips: {chipsAverage}</h3>
            <h3>Average # of Putts: {puttsAverage}</h3> */}
        </div>
    )
}

export default AddRound;