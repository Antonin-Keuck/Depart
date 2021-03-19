import {useEffect, useState} from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import RadialSeparators from "../RadialSeparators.js";
import './Advancement.css';
import {useInterval} from '../utils/hooks/useInterval'
import {getNumberDays} from '../utils/dateFunctions'

function percentageToColor(percentage, greenFirst) {
    if (greenFirst === true) {
        return (`rgba(${255 * percentage / 100 }, ${255 - 255 * percentage / 100 }, 0, 1 )`);        
    } else
        return (`rgba(${255 - 255* percentage / 100 }, ${255 * percentage / 100 }, 0, 1 )`);
}

function Advancement({depart, status, greenFirst}) {
  const [numberDays, setNumberDays] = useState(getNumberDays("02/08/2021", depart, false));
  const [percentage, setPercentage] = useState(getNumberDays("02/08/2021", depart, true));

  useInterval(() => {
      setNumberDays(getNumberDays("02/08/2021", depart, false));
      setPercentage(getNumberDays("02/08/2021", depart, true));
    }, 60000 * 30)


    
  return (
    <div className="Advancement">
        <h1 className="titleOfAdvancement">{status} d'Antonin</h1>
      <div className="days">
          Jours restants : {numberDays}
      </div>
      <div className="progressBarContainer">
        <CircularProgressbarWithChildren className="progressBarWithChild" value={percentage} strokeWidth={5} 
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
            height: `${10}%`,
          }}
        />
          <div>
            <strong className="textOnBar">{percentage} % </strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}

export default Advancement;