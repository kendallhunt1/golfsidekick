import React, {useState} from 'react';
import './Styles/App.css';
import Dashboard from './Components/Dashboard.js';
import AddRound from './Components/AddRound.js';
import Analyze from './Components/Analyze.js';
import Improve from './Components/Improve.js';
import './Styles/Navigation.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Analyzing from './SVGs/analyzing.svg';
import Edit from './SVGs/edit.svg';
import Golf from './SVGs/golf.svg';
import Increase from './SVGs/increase.svg';

function App() {

  const [daHoleNumber, setDaHoleNumber] = useState(1)
  
  const [hole1Par, setHole1Par] = useState(4);
  const [hole1Score, setHole1Score] = useState(3);
  const [hole1Layout, setHole1Layout] = useState('');
  const [hole1Distance, setHole1Distance] = useState('');
  const [hole1FH, setHole1FH] = useState(true);
  const [hole1GIR, setHole1GIR] = useState(true);
  const [hole1RS, setHole1RS] = useState(0);
  const [hole1CS, setHole1CS] = useState(1);
  const [hole1Putts, setHole1Putts] = useState(1);

  const [hole2Par, setHole2Par] = useState(5);
  const [hole2Score, setHole2Score] = useState(5);
  const [hole2Layout, setHole2Layout] = useState('');
  const [hole2Distance, setHole2Distance] = useState('');
  const [hole2FH, setHole2FH] = useState("L");
  const [hole2GIR, setHole2GIR] = useState(true);
  const [hole2RS, setHole2RS] = useState(1);
  const [hole2CS, setHole2CS] = useState(0);
  const [hole2Putts, setHole2Putts] = useState(2);

  const [hole3Par, setHole3Par] = useState('');
  const [hole3Score, setHole3Score] = useState('');
  const [hole3Layout, setHole3Layout] = useState('');
  const [hole3Distance, setHole3Distance] = useState('');
  const [hole3FH, setHole3FH] = useState('');
  const [hole3GIR, setHole3GIR] = useState('');
  const [hole3RS, setHole3RS] = useState('');
  const [hole3CS, setHole3CS] = useState('');
  const [hole3Putts, setHole3Putts] = useState('');

  const [hole4Par, setHole4Par] = useState('');
  const [hole4Score, setHole4Score] = useState('');
  const [hole4Layout, setHole4Layout] = useState('');
  const [hole4Distance, setHole4Distance] = useState('');
  const [hole4FH, setHole4FH] = useState('');
  const [hole4GIR, setHole4GIR] = useState('');
  const [hole4RS, setHole4RS] = useState('');
  const [hole4CS, setHole4CS] = useState('');
  const [hole4Putts, setHole4Putts] = useState('');
  
  const [hole5Par, setHole5Par] = useState('');
  const [hole5Score, setHole5Score] = useState('');
  const [hole5Layout, setHole5Layout] = useState('');
  const [hole5Distance, setHole5Distance] = useState('');
  const [hole5FH, setHole5FH] = useState('');
  const [hole5GIR, setHole5GIR] = useState('');
  const [hole5RS, setHole5RS] = useState('');
  const [hole5CS, setHole5CS] = useState('');
  const [hole5Putts, setHole5Putts] = useState('');

  const [hole6Par, setHole6Par] = useState('');
  const [hole6Score, setHole6Score] = useState('');
  const [hole6Layout, setHole6Layout] = useState('');
  const [hole6Distance, setHole6Distance] = useState('');
  const [hole6FH, setHole6FH] = useState('');
  const [hole6GIR, setHole6GIR] = useState('');
  const [hole6RS, setHole6RS] = useState('');
  const [hole6CS, setHole6CS] = useState('');
  const [hole6Putts, setHole6Putts] = useState('');
  
  const [hole7Par, setHole7Par] = useState('');
  const [hole7Score, setHole7Score] = useState('');
  const [hole7Layout, setHole7Layout] = useState('');
  const [hole7Distance, setHole7Distance] = useState('');
  const [hole7FH, setHole7FH] = useState('');
  const [hole7GIR, setHole7GIR] = useState('');
  const [hole7RS, setHole7RS] = useState('');
  const [hole7CS, setHole7CS] = useState('');
  const [hole7Putts, setHole7Putts] = useState('');
  
  const [hole8Par, setHole8Par] = useState('');
  const [hole8Score, setHole8Score] = useState('');
  const [hole8Layout, setHole8Layout] = useState('');
  const [hole8Distance, setHole8Distance] = useState('');
  const [hole8FH, setHole8FH] = useState('');
  const [hole8GIR, setHole8GIR] = useState('');
  const [hole8RS, setHole8RS] = useState('');
  const [hole8CS, setHole8CS] = useState('');
  const [hole8Putts, setHole8Putts] = useState('');
  
  const [hole9Par, setHole9Par] = useState('');
  const [hole9Score, setHole9Score] = useState('');
  const [hole9Layout, setHole9Layout] = useState('');
  const [hole9Distance, setHole9Distance] = useState('');
  const [hole9FH, setHole9FH] = useState('');
  const [hole9GIR, setHole9GIR] = useState('');
  const [hole9RS, setHole9RS] = useState('');
  const [hole9CS, setHole9CS] = useState('');
  const [hole9Putts, setHole9Putts] = useState('');

  const [hole10Par, setHole10Par] = useState('');
  const [hole10Score, setHole10Score] = useState('');
  const [hole10Layout, setHole10Layout] = useState('');
  const [hole10Distance, setHole10Distance] = useState('');
  const [hole10FH, setHole10FH] = useState('');
  const [hole10GIR, setHole10GIR] = useState('');
  const [hole10RS, setHole10RS] = useState('');
  const [hole10CS, setHole10CS] = useState('');
  const [hole10Putts, setHole10Putts] = useState('');

  const [hole11Par, setHole11Par] = useState('');
  const [hole11Score, setHole11Score] = useState('');
  const [hole11Layout, setHole11Layout] = useState('');
  const [hole11Distance, setHole11Distance] = useState('');
  const [hole11FH, setHole11FH] = useState('');
  const [hole11GIR, setHole11GIR] = useState('');
  const [hole11RS, setHole11RS] = useState('');
  const [hole11CS, setHole11CS] = useState('');
  const [hole11Putts, setHole11Putts] = useState('');

  const [hole12Par, setHole12Par] = useState('');
  const [hole12Score, setHole12Score] = useState('');
  const [hole12Layout, setHole12Layout] = useState('');
  const [hole12Distance, setHole12Distance] = useState('');
  const [hole12FH, setHole12FH] = useState('');
  const [hole12GIR, setHole12GIR] = useState('');
  const [hole12RS, setHole12RS] = useState('');
  const [hole12CS, setHole12CS] = useState('');
  const [hole12Putts, setHole12Putts] = useState('');

  const [hole13Par, setHole13Par] = useState('');
  const [hole13Score, setHole13Score] = useState('');
  const [hole13Layout, setHole13Layout] = useState('');
  const [hole13Distance, setHole13Distance] = useState('');
  const [hole13FH, setHole13FH] = useState('');
  const [hole13GIR, setHole13GIR] = useState('');
  const [hole13RS, setHole13RS] = useState('');
  const [hole13CS, setHole13CS] = useState('');
  const [hole13Putts, setHole13Putts] = useState('');
  
  const [hole14Par, setHole14Par] = useState('');
  const [hole14Score, setHole14Score] = useState('');
  const [hole14Layout, setHole14Layout] = useState('');
  const [hole14Distance, setHole14Distance] = useState('');
  const [hole14FH, setHole14FH] = useState('');
  const [hole14GIR, setHole14GIR] = useState('');
  const [hole14RS, setHole14RS] = useState('');
  const [hole14CS, setHole14CS] = useState('');
  const [hole14Putts, setHole14Putts] = useState('');

  const [hole15Par, setHole15Par] = useState('');
  const [hole15Score, setHole15Score] = useState('');
  const [hole15Layout, setHole15Layout] = useState('');
  const [hole15Distance, setHole15Distance] = useState('');
  const [hole15FH, setHole15FH] = useState('');
  const [hole15GIR, setHole15GIR] = useState('');
  const [hole15RS, setHole15RS] = useState('');
  const [hole15CS, setHole15CS] = useState('');
  const [hole15Putts, setHole15Putts] = useState('');

  const [hole16Par, setHole16Par] = useState('');
  const [hole16Score, setHole16Score] = useState('');
  const [hole16Layout, setHole16Layout] = useState('');
  const [hole16Distance, setHole16Distance] = useState('');
  const [hole16FH, setHole16FH] = useState('');
  const [hole16GIR, setHole16GIR] = useState('');
  const [hole16RS, setHole16RS] = useState('');
  const [hole16CS, setHole16CS] = useState('');
  const [hole16Putts, setHole16Putts] = useState('');

  const [hole17Par, setHole17Par] = useState('');
  const [hole17Score, setHole17Score] = useState('');
  const [hole17Layout, setHole17Layout] = useState('');
  const [hole17Distance, setHole17Distance] = useState('');
  const [hole17FH, setHole17FH] = useState('');
  const [hole17GIR, setHole17GIR] = useState('');
  const [hole17RS, setHole17RS] = useState('');
  const [hole17CS, setHole17CS] = useState('');
  const [hole17Putts, setHole17Putts] = useState('');

  const [hole18Par, setHole18Par] = useState('');
  const [hole18Score, setHole18Score] = useState('');
  const [hole18Layout, setHole18Layout] = useState('');
  const [hole18Distance, setHole18Distance] = useState('');
  const [hole18FH, setHole18FH] = useState('');
  const [hole18GIR, setHole18GIR] = useState('');
  const [hole18RS, setHole18RS] = useState('');
  const [hole18CS, setHole18CS] = useState('');
  const [hole18Putts, setHole18Putts] = useState('');

  const hole1 = [{
    par: hole1Par,
    score: hole1Score,
    layout: hole1Layout,
    distance: hole1Distance,
    fh: hole1FH,
    gir: hole1GIR,
    rs: hole1RS,
    cs: hole1CS,
    putts: hole1Putts
  }]

  const hole2 = [{
    par: hole2Par,
    score: hole2Score,
    layout: hole2Layout,
    distance: hole2Distance,
    fh: hole2FH,
    gir: hole2GIR,
    rs: hole2RS,
    cs: hole2CS,
    putts: hole2Putts
}]

const hole3 = [{
  par: hole3Par,
  score: hole3Score,
  layout: hole3Layout,
  distance: hole3Distance,
  fh: hole3FH,
  gir: hole3GIR,
  rs: hole3RS,
  cs: hole3CS,
  putts: hole3Putts
}]

const hole4 = [{
  par: hole4Par,
  score: hole4Score,
  layout: hole4Layout,
  distance: hole4Distance,
  fh: hole4FH,
  gir: hole4GIR,
  rs: hole4RS,
  cs: hole4CS,
  putts: hole4Putts
}]

const hole5 = [{
  par: hole5Par,
  score: hole5Score,
  layout: hole5Layout,
  distance: hole5Distance,
  fh: hole5FH,
  gir: hole5GIR,
  rs: hole5RS,
  cs: hole5CS,
  putts: hole5Putts
}]

const hole6 = [{
  par: hole6Par,
  score: hole6Score,
  layout: hole6Layout,
  distance: hole6Distance,
  fh: hole6FH,
  gir: hole6GIR,
  rs: hole6RS,
  cs: hole6CS,
  putts: hole6Putts
}]

const hole7 = [{
  par: hole7Par,
  score: hole7Score,
  layout: hole7Layout,
  distance: hole7Distance,
  fh: hole7FH,
  gir: hole7GIR,
  rs: hole7RS,
  cs: hole7CS,
  putts: hole7Putts
}]

const hole8 = [{
  par: hole8Par,
  score: hole8Score,
  layout: hole8Layout,
  distance: hole8Distance,
  fh: hole8FH,
  gir: hole8GIR,
  rs: hole8RS,
  cs: hole8CS,
  putts: hole8Putts
}]

const hole9 = [{
  par: hole9Par,
  score: hole9Score,
  layout: hole9Layout,
  distance: hole9Distance,
  fh: hole9FH,
  gir: hole9GIR,
  rs: hole9RS,
  cs: hole9CS,
  putts: hole9Putts
}]

const hole10 = [{
  par: hole10Par,
  score: hole10Score,
  layout: hole10Layout,
  distance: hole10Distance,
  fh: hole10FH,
  gir: hole10GIR,
  rs: hole10RS,
  cs: hole10CS,
  putts: hole10Putts
}]

const hole11 = [{
  par: hole11Par,
  score: hole11Score,
  layout: hole11Layout,
  distance: hole11Distance,
  fh: hole11FH,
  gir: hole11GIR,
  rs: hole11RS,
  cs: hole11CS,
  putts: hole11Putts
}]

const hole12 = [{
  par: hole12Par,
  score: hole12Score,
  layout: hole12Layout,
  distance: hole12Distance,
  fh: hole12FH,
  gir: hole12GIR,
  rs: hole12RS,
  cs: hole12CS,
  putts: hole12Putts
}]

const hole13 = [{
  par: hole13Par,
  score: hole13Score,
  layout: hole13Layout,
  distance: hole13Distance,
  fh: hole13FH,
  gir: hole13GIR,
  rs: hole13RS,
  cs: hole13CS,
  putts: hole13Putts
}]

const hole14 = [{
  par: hole14Par,
  score: hole14Score,
  layout: hole14Layout,
  distance: hole14Distance,
  fh: hole14FH,
  gir: hole14GIR,
  rs: hole14RS,
  cs: hole14CS,
  putts: hole14Putts
}]

const hole15 = [{
  par: hole15Par,
  score: hole15Score,
  layout: hole15Layout,
  distance: hole15Distance,
  fh: hole15FH,
  gir: hole15GIR,
  rs: hole15RS,
  cs: hole15CS,
  putts: hole15Putts
}]

const hole16 = [{
  par: hole16Par,
  score: hole16Score,
  layout: hole16Layout,
  distance: hole16Distance,
  fh: hole16FH,
  gir: hole16GIR,
  rs: hole16RS,
  cs: hole16CS,
  putts: hole16Putts
}]

const hole17 = [{
  par: hole17Par,
  score: hole17Score,
  layout: hole17Layout,
  distance: hole17Distance,
  fh: hole17FH,
  gir: hole17GIR,
  rs: hole17RS,
  cs: hole17CS,
  putts: hole17Putts
}]

const hole18 = [{
  par: hole18Par,
  score: hole18Score,
  layout: hole18Layout,
  distance: hole18Distance,
  fh: hole18FH,
  gir: hole18GIR,
  rs: hole18RS,
  cs: hole18CS,
  putts: hole18Putts
}]

const holePars = [
  hole1Par, hole2Par, hole3Par, hole4Par, hole5Par, hole6Par, hole7Par, hole8Par, hole9Par, hole10Par, hole9Par, hole10Par, hole11Par, hole12Par, hole13Par, hole14Par, hole15Par, hole16Par, hole17Par, hole18Par,
]

const playerScores = [
  hole1Score, hole2Score, hole3Score, hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score, hole10Score, hole11Score, hole12Score, hole13Score, hole14Score, hole15Score, hole16Score, hole17Score, hole18Score,
]

const fairwaysHit = [
  hole1FH, hole2FH, hole3FH, hole4FH, hole5FH, hole6FH, hole7FH, hole8FH, hole9FH, hole10FH, hole11FH, hole12FH, hole13FH, hole14FH, hole15FH, hole16FH, hole17FH, hole18FH
]

const gIRS = [
  hole1GIR, hole2GIR, hole3GIR, hole4GIR, hole5GIR, hole6GIR, hole7GIR, hole8GIR, hole9GIR, hole10GIR, hole11GIR, hole12GIR, hole13GIR, hole14GIR, hole15GIR, hole16GIR, hole17GIR, hole18GIR
]

const roughShots = [
  hole1RS, hole2RS, hole3RS, hole4RS, hole5RS, hole6RS, hole7RS, hole8RS, hole9RS, hole10RS, hole11RS, hole12RS, hole13RS, hole14RS, hole15RS, hole16RS, hole17RS, hole18RS
]

const chips = [
  hole1CS, hole2CS, hole3CS, hole4CS, hole5CS, hole6CS, hole7CS, hole8CS, hole9CS, hole10CS, hole11CS, hole12CS, hole13CS, hole14CS, hole15CS, hole16CS, hole17CS, hole18CS
]

const putts = [
  hole1Putts, hole2Putts, hole3Putts, hole4Putts, hole5Putts, hole6Putts, hole7Putts, hole8Putts, hole9Putts, hole10Putts, hole11Putts, hole12Putts, hole13Putts, hole14Putts, hole15Putts, hole16Putts, hole17Putts, hole18Putts
]

  const updateHoleData = (daHoleNumber, holePar, playerScore, holeLayout, holeDistance, fairwayHit, greenInRegulation, numberOfShotsFromRough, numberOfChips, numberOfPutts) => {
    if (daHoleNumber == 1) {
      setHole1Par(holePar);
      setHole1Score(playerScore);
      setHole1Layout(holeLayout);
      setHole1Distance(holeDistance);
      setHole1FH(fairwayHit);
      setHole1GIR(greenInRegulation);
      setHole1RS(numberOfShotsFromRough);
      setHole1CS(numberOfChips);
      setHole1Putts(numberOfPutts);
    } if (daHoleNumber == 2) {
      setHole2Par(holePar)
      setHole2Score(playerScore);
      setHole2Layout(holeLayout);
      setHole2Distance(holeDistance);
      setHole2FH(fairwayHit);
      setHole2GIR(greenInRegulation);
      setHole2RS(numberOfShotsFromRough);
      setHole2CS(numberOfChips);
      setHole2Putts(numberOfPutts);
  } if (daHoleNumber == 3) {
      setHole3Par(holePar)
      setHole3Score(playerScore);
      setHole3Layout(holeLayout);
      setHole3Distance(holeDistance);
      setHole3FH(fairwayHit);
      setHole3GIR(greenInRegulation);
      setHole3RS(numberOfShotsFromRough);
      setHole3CS(numberOfChips);
      setHole3Putts(numberOfPutts);
  } if (daHoleNumber == 4) {
      setHole4Par(holePar);
      setHole4Score(playerScore);
      setHole4Layout(holeLayout);
      setHole4Distance(holeDistance);
      setHole4FH(fairwayHit);
      setHole4GIR(greenInRegulation);
      setHole4RS(numberOfShotsFromRough);
      setHole4CS(numberOfChips);
      setHole4Putts(numberOfPutts);
  } if (daHoleNumber == 5) {
      setHole5Par(holePar);
      setHole5Score(playerScore);
      setHole5Layout(holeLayout);
      setHole5Distance(holeDistance);
      setHole5FH(fairwayHit);
      setHole5GIR(greenInRegulation);
      setHole5RS(numberOfShotsFromRough);
      setHole5CS(numberOfChips);
      setHole5Putts(numberOfPutts);
  } if (daHoleNumber == 6) {
      setHole6Par(holePar);
      setHole6Score(playerScore);
      setHole6Layout(holeLayout);
      setHole6Distance(holeDistance);
      setHole6FH(fairwayHit);
      setHole6GIR(greenInRegulation);
      setHole6RS(numberOfShotsFromRough);
      setHole6CS(numberOfChips);
      setHole6Putts(numberOfPutts);
  } if (daHoleNumber == 7) {
      setHole7Par(holePar);
      setHole7Score(playerScore);
      setHole7Layout(holeLayout);
      setHole7Distance(holeDistance);
      setHole7FH(fairwayHit);
      setHole7GIR(greenInRegulation);
      setHole7RS(numberOfShotsFromRough);
      setHole7CS(numberOfChips);
      setHole7Putts(numberOfPutts);
  } if (daHoleNumber == 8) {
      setHole8Par(holePar);
      setHole8Score(playerScore);
      setHole8Layout(holeLayout);
      setHole8Distance(holeDistance);
      setHole8FH(fairwayHit);
      setHole8GIR(greenInRegulation);
      setHole8RS(numberOfShotsFromRough);
      setHole8CS(numberOfChips);
      setHole8Putts(numberOfPutts);
  } if (daHoleNumber == 9) {
      setHole9Par(holePar);
      setHole9Score(playerScore);
      setHole9Layout(holeLayout);
      setHole9Distance(holeDistance);
      setHole9FH(fairwayHit);
      setHole9GIR(greenInRegulation);
      setHole9RS(numberOfShotsFromRough);
      setHole9CS(numberOfChips);
      setHole9Putts(numberOfPutts);
  } if (daHoleNumber == 10) {
      setHole10Par(holePar);
      setHole10Score(playerScore);
      setHole10Layout(holeLayout);
      setHole10Distance(holeDistance);
      setHole10FH(fairwayHit);
      setHole10GIR(greenInRegulation);
      setHole10RS(numberOfShotsFromRough);
      setHole10CS(numberOfChips);
      setHole10Putts(numberOfPutts);
  } if (daHoleNumber == 11) {
      setHole11Par(holePar);
      setHole11Score(playerScore);
      setHole11Layout(holeLayout);
      setHole11Distance(holeDistance);
      setHole11FH(fairwayHit);
      setHole11GIR(greenInRegulation);
      setHole11RS(numberOfShotsFromRough);
      setHole11CS(numberOfChips);
      setHole11Putts(numberOfPutts);
  } if (daHoleNumber == 12) {
      setHole12Par(holePar);
      setHole12Score(playerScore);
      setHole12Layout(holeLayout);
      setHole12Distance(holeDistance);
      setHole12FH(fairwayHit);
      setHole12GIR(greenInRegulation);
      setHole12RS(numberOfShotsFromRough);
      setHole12CS(numberOfChips);
      setHole12Putts(numberOfPutts);
  } if (daHoleNumber == 13) {
      setHole13Par(holePar);
      setHole13Score(playerScore);
      setHole13Layout(holeLayout);
      setHole13Distance(holeDistance);
      setHole13FH(fairwayHit);
      setHole13GIR(greenInRegulation);
      setHole13RS(numberOfShotsFromRough);
      setHole13CS(numberOfChips);
      setHole13Putts(numberOfPutts);
  } if (daHoleNumber == 14) {
      setHole14Par(holePar);
      setHole14Score(playerScore);
      setHole14Layout(holeLayout);
      setHole14Distance(holeDistance);
      setHole14FH(fairwayHit);
      setHole14GIR(greenInRegulation);
      setHole14RS(numberOfShotsFromRough);
      setHole14CS(numberOfChips);
      setHole14Putts(numberOfPutts);
  } if (daHoleNumber == 15) {
      setHole15Par(holePar);
      setHole15Score(playerScore);
      setHole15Layout(holeLayout);
      setHole15Distance(holeDistance);
      setHole15FH(fairwayHit);
      setHole15GIR(greenInRegulation);
      setHole15RS(numberOfShotsFromRough);
      setHole15CS(numberOfChips);
      setHole15Putts(numberOfPutts);
  } if (daHoleNumber == 16) {
      setHole16Par(holePar);
      setHole16Score(playerScore);
      setHole16Layout(holeLayout);
      setHole16Distance(holeDistance);
      setHole16FH(fairwayHit);
      setHole16GIR(greenInRegulation);
      setHole16RS(numberOfShotsFromRough);
      setHole16CS(numberOfChips);
      setHole16Putts(numberOfPutts);
  } if (daHoleNumber == 17) {
      setHole17Par(holePar);
      setHole17Score(playerScore);
      setHole17Layout(holeLayout);
      setHole17Distance(holeDistance);
      setHole17FH(fairwayHit);
      setHole17GIR(greenInRegulation);
      setHole17RS(numberOfShotsFromRough);
      setHole17CS(numberOfChips);
      setHole17Putts(numberOfPutts);
  } if (daHoleNumber == 18) {
      setHole18Par(holePar);
      setHole18Score(playerScore);
      setHole18Layout(holeLayout);
      setHole18Distance(holeDistance);
      setHole18FH(fairwayHit);
      setHole18GIR(greenInRegulation);
      setHole18RS(numberOfShotsFromRough);
      setHole18CS(numberOfChips);
      setHole18Putts(numberOfPutts);
  }
}

  const roundData = [
    [hole1],
    [hole2]
  ]

  const par3ScoreArray = [];
  const par4ScoreArray = [];
  const par5ScoreArray = [];

  roundData.map((index) => {
    index.map((data) => {
      const newData=[data[0]];
      newData.map((stuff) => {
        console.log(stuff.par);
        if (stuff.par === 3) {
          console.log('3 fudge nuggets')
          par3ScoreArray.push(stuff.score);
        } else if (stuff.par === 4) {
          console.log('fudge nuggets')
          par4ScoreArray.push(stuff.score);
        } else if (stuff.par === 5) {
          console.log('5 fudge nuggets');
          par5ScoreArray.push(stuff.score);
        }
      });
    })
  })

  return (
    <div className="App" style={{background: "black"}}>
      <Router>
        <div className="navigationWrapper">
          <div className="navigation">
              <Link to="/" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><img src={Golf} alt="Home"/></Link>
              <Link to="/AddRound" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><img src={Edit} alt="Create a New Round" /></Link>
              <Link to="/analyze" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><img src={Analyzing} alt="Analyze Your Statistics" /></Link>
              <Link to="/improve" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><img src={Increase} alt="Lower Your Handicap" /></Link>
          </div>
        </div>      
            <Switch>
                <Route path="/" exact>
                    <Dashboard />
                </Route>
                <Route path="/AddRound" exact>
                    <AddRound 
                    setDaHoleNumber={setDaHoleNumber} daHoleNumber={daHoleNumber} setHole1Score={setHole1Score} setHole1Distance={setHole1Distance} setHole1Layout={setHole1Layout} setHole1FH={setHole1FH} setHole1GIR={setHole1GIR} setHole1RS={setHole1RS} setHole1CS={setHole1CS} setHole1Putts={setHole1Putts}
                    hole1Par={hole1Par} setHole1Par={setHole1Par} hole1Score={hole1Score} hole1Layout={hole1Layout} hole1Distance={hole1Distance} hole1GIR={hole1GIR} hole1FH={hole1FH} hole1RS={hole1RS} hole1CS={hole1CS} hole1Putts={hole1Putts} setHole2Par={setHole2Par}
                    hole2Par={hole2Par} setHole2Par={setHole2Par} hole1Score={hole2Score} hole1Layout={hole2Layout} hole1Distance={hole2Distance} hole1GIR={hole2GIR} hole1FH={hole2FH} hole1RS={hole2RS} hole1CS={hole2CS} hole1Putts={hole2Putts}
                    hole3Par={hole3Par} setHole3Par={setHole3Par} hole1Score={hole3Score} hole1Layout={hole3Layout} hole1Distance={hole3Distance} hole1GIR={hole3GIR} hole1FH={hole3FH} hole1RS={hole3RS} hole1CS={hole3CS} hole1Putts={hole3Putts}
                    hole4Par={hole4Par} setHole4Par={setHole4Par} hole1Score={hole4Score} hole1Layout={hole4Layout} hole1Distance={hole4Distance} hole1GIR={hole4GIR} hole1FH={hole4FH} hole1RS={hole4RS} hole1CS={hole4CS} hole1Putts={hole4Putts}
                    hole5Par={hole5Par} setHole5Par={setHole5Par} hole1Score={hole5Score} hole1Layout={hole5Layout} hole1Distance={hole5Distance} hole1GIR={hole5GIR} hole1FH={hole5FH} hole1RS={hole5RS} hole1CS={hole5CS} hole1Putts={hole5Putts}
                    hole6Par={hole6Par} setHole6Par={setHole6Par} hole1Score={hole6Score} hole1Layout={hole6Layout} hole1Distance={hole6Distance} hole1GIR={hole6GIR} hole1FH={hole6FH} hole1RS={hole6RS} hole1CS={hole6CS} hole1Putts={hole6Putts}
                    hole7Par={hole7Par} setHole7Par={setHole7Par} hole1Score={hole7Score} hole1Layout={hole7Layout} hole1Distance={hole7Distance} hole1GIR={hole7GIR} hole1FH={hole7FH} hole1RS={hole7RS} hole1CS={hole7CS} hole1Putts={hole7Putts}
                    hole8Par={hole8Par} setHole8Par={setHole8Par} hole1Score={hole8Score} hole1Layout={hole8Layout} hole1Distance={hole8Distance} hole1GIR={hole8GIR} hole1FH={hole8FH} hole1RS={hole8RS} hole1CS={hole8CS} hole1Putts={hole8Putts}
                    hole9Par={hole9Par} setHole9Par={setHole9Par} hole1Score={hole9Score} hole1Layout={hole9Layout} hole1Distance={hole9Distance} hole1GIR={hole9GIR} hole1FH={hole9FH} hole1RS={hole9RS} hole1CS={hole9CS} hole1Putts={hole9Putts}
                    hole10Par={hole10Par} setHole10Par={setHole10Par} hole1Score={hole10Score} hole1Layout={hole10Layout} hole1Distance={hole10Distance} hole1GIR={hole10GIR} hole1FH={hole10FH} hole1RS={hole10RS} hole1CS={hole10CS} hole1Putts={hole10Putts}
                    hole11Par={hole11Par} setHole11Par={setHole11Par} hole1Score={hole11Score} hole1Layout={hole11Layout} hole1Distance={hole11Distance} hole1GIR={hole11GIR} hole1FH={hole11FH} hole1RS={hole11RS} hole1CS={hole11CS} hole1Putts={hole11Putts}
                    hole12Par={hole12Par} setHole12Par={setHole12Par} hole1Score={hole12Score} hole1Layout={hole12Layout} hole1Distance={hole12Distance} hole1GIR={hole12GIR} hole1FH={hole12FH} hole1RS={hole12RS} hole1CS={hole12CS} hole1Putts={hole12Putts}
                    hole13Par={hole13Par} setHole13Par={setHole13Par} hole1Score={hole13Score} hole1Layout={hole13Layout} hole1Distance={hole13Distance} hole1GIR={hole13GIR} hole1FH={hole13FH} hole1RS={hole13RS} hole1CS={hole13CS} hole1Putts={hole13Putts}
                    hole14Par={hole14Par} setHole14Par={setHole14Par} hole1Score={hole14Score} hole1Layout={hole14Layout} hole1Distance={hole14Distance} hole1GIR={hole14GIR} hole1FH={hole14FH} hole1RS={hole14RS} hole1CS={hole14CS} hole1Putts={hole14Putts}
                    hole15Par={hole15Par} setHole15Par={setHole15Par} hole1Score={hole15Score} hole1Layout={hole15Layout} hole1Distance={hole15Distance} hole1GIR={hole15GIR} hole1FH={hole15FH} hole1RS={hole15RS} hole1CS={hole15CS} hole1Putts={hole15Putts}
                    hole16Par={hole16Par} setHole16Par={setHole16Par} hole1Score={hole16Score} hole1Layout={hole16Layout} hole1Distance={hole16Distance} hole1GIR={hole16GIR} hole1FH={hole16FH} hole1RS={hole16RS} hole1CS={hole16CS} hole1Putts={hole16Putts}
                    hole17Par={hole17Par} setHole17Par={setHole17Par} hole1Score={hole17Score} hole1Layout={hole17Layout} hole1Distance={hole17Distance} hole1GIR={hole17GIR} hole1FH={hole17FH} hole1RS={hole17RS} hole1CS={hole17CS} hole1Putts={hole17Putts}
                    hole18Par={hole18Par} setHole18Par={setHole18Par} hole1Score={hole18Score} hole1Layout={hole18Layout} hole1Distance={hole18Distance} hole1GIR={hole18GIR} hole1FH={hole18FH} hole1RS={hole18RS} hole1CS={hole18CS} hole1Putts={hole18Putts}
                    updateHoleData={updateHoleData}
                    />
                </Route>
                <Route path="/analyze" exact>
                  <Analyze 
                  roundData={roundData} hole1={hole1} playerScores={playerScores} fairwaysHit={fairwaysHit} gIRS={gIRS} roughShots={roughShots} chips={chips} putts={putts} holePars={holePars} par3ScoreArray={par3ScoreArray} par4ScoreArray={par4ScoreArray} par5ScoreArray={par5ScoreArray}
                  />
                </Route>
                <Route path="/improve" exact>
                  <Improve />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
