import {useEffect, useState} from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import RadialSeparators from "../RadialSeparators.js";
import './Advancement.css';
import {useInterval} from '../utils/hooks/useInterval'
import {getNumberDays, dayBeforeBirthday} from '../utils/dateFunctions'

function percentageToColor(percentage, greenFirst) {
    if (greenFirst === true) {
        return (`rgba(${255 * percentage / 100 }, ${255 - 255 * percentage / 100 }, 0, 1 )`);        
    } else
        return (`rgba(${255 - 255* percentage / 100 }, ${255 * percentage / 100 }, 0, 1 )`);
}

function Advancement({children, endDate, greenFirst, beginDate}) {
  const [numberDays, setNumberDays] = useState(getNumberDays(beginDate, endDate, false));
  const [percentage, setPercentage] = useState(getNumberDays(beginDate, endDate, true));


  useEffect(() => {
    setNumberDays(getNumberDays(beginDate, endDate, false));
    setPercentage(getNumberDays(beginDate, endDate, true));    
  }, [beginDate, endDate])

  useInterval(() => {
      setNumberDays(getNumberDays(beginDate, endDate, false));
      setPercentage(getNumberDays(beginDate, endDate, true));
    }, 60000 * 30)

    return (
    <div className="Advancement">
        <h1 className="advancement-title">{(children ? children : "Votre évènement")}</h1>
      <div className="days">
          {numberDays > 0 ?  "Jours restants : " + numberDays : "Cette date est passée"}
      </div>
      <div className="progressBarContainer">
        <CircularProgressbarWithChildren className="progressBarWithChild" value={percentage} strokeWidth={5}
        styles={buildStyles({
            pathColor: `${percentageToColor(percentage, greenFirst)}`,
            strokeLinecap: "butt",
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