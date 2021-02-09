
import 'react-circular-progressbar/dist/styles.css';
import logo from './logo.svg';
import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import RadialSeparators from "./RadialSeparators.js";
import './Advancement.css';


const MONTH = { '1' : 'Janvier', '2': 'Fevrier', '3': 'Mars', '4': 'Avril', '5': 'Mai', '6': 'Juin',
        '7': 'Juillet', '8': 'Aout', '9': 'Septembre', '10': 'Octobre', '11': 'Novembre', '12': 'Décembre', };

const perc2colorRedToGreen = (perc) => {
	var r, g, b = 0;
	if(perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  }
	else {
    g = 255;
    r = Math.round(510 - 5.10 * perc);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
	return '#' + ('000000' + h.toString(16)).slice(-6);
}


function writeDate(date) {
    var dateToWrite = new Date(date);
    // return (date);
    return (dateToWrite.getDate() + ' ' + MONTH[dateToWrite.getMonth() + 1] + ' ' + dateToWrite.getFullYear());
}

function getNumberDays(beginDate, endDate, percentageNeeded) {
    const currentDate = new Date();
    // const currentDate = new Date("08/05/2021");
    const begin = new Date(beginDate);
    const end = new Date(endDate);

    var timeBeforeGo = end.getTime() - begin.getTime();
    var advancedTime = (currentDate.getTime() - begin.getTime());

    if (percentageNeeded === false)
    return  ( ((timeBeforeGo - advancedTime) / (1000 * 3600 * 24)).toFixed(0) )
    var percentage = (advancedTime * 100 / timeBeforeGo);
    if (percentageNeeded === true)
    return(percentage.toFixed(2));
}

function percentageToColor(percentage, greenFirst) {
    if (greenFirst === true) {
        return (`rgba(${255 * percentage / 100 }, ${255 - 255 * percentage / 100 }, 0, 1 )`);        
    } else
        return (`rgba(${255 - 255* percentage / 100 }, ${255 * percentage / 100 }, 0, 1 )`);
}

function Advancement({depart, status, greenFirst}) {
    const numberDays = getNumberDays("02/08/2021", depart, false);
    const percentage = getNumberDays("02/08/2021", depart, true);

  return (
    <div className="Advancement">
        <h1>{status} d'Antonin</h1>
      <div className="days">
          Jours restants : {numberDays}
      </div>
      <div className="progressBarContainer">
        <CircularProgressbarWithChildren className="progress" value={percentage} strokeWidth={5} 
        styles={buildStyles({
            pathColor: `${percentageToColor(percentage, greenFirst)}`,
            strokeLinecap: "butt"
        })}>
        <RadialSeparators
          count={12}
          style={{
            background: "#fff",
            width: "2px",
            // This needs to be equal to props.strokeWidth
            height: `${10}%`
          }}
        />
          {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
          <div className="textOnBar">
            <strong>{percentage} % </strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}

export default Advancement;
