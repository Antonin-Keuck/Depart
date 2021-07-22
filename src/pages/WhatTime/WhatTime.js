import React, {useState, useEffect} from 'react'
import moment from 'moment';
import timezone from 'moment-timezone'
import {localesLang, whisprUser} from '../../config';
import {MONTH, DAY} from '../../utils/dateFunctions'

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    }
}

function useGetTimeIn(date, chosenTimeZone, timeZoneSearch) {
    const [franceMoment, setFranceMoment] = useState(moment().tz(timeZoneSearch));
    // const [localMoment, setLocalMoment] = useState(franceMoment.tz(timeZoneSearch));
    const [strLocalDay, setStrLocalDay] = useState("");
    const [strLocalHour, setStrLocalHour] = useState("");
    const [delay, setDelay] = useState(0);

    useEffect(() => {
        setDelay(100);
        setTimeout(() => {
            setFranceMoment(moment(date).tz(chosenTimeZone));
            // setLocalMoment(franceMoment.tz(timeZoneSearch));
            const newDate = franceMoment.tz(timeZoneSearch).format("YYYY-MM-DD HH:mm:ss");
            const localDate = new Date(newDate);
            setStrLocalDay(localDate.toLocaleString(localesLang, {weekday: "long", month: "long", day: "numeric"}));
            setStrLocalHour(localDate.toLocaleString(localesLang, date ? {hour: "numeric", minute: 'numeric'} : {hour: "numeric", minute: 'numeric', second:'numeric'}));
        }, delay);
    }, [chosenTimeZone, date, delay, franceMoment, timeZoneSearch]);
    return ({
        strLocalDay: strLocalDay,
        strLocalHour: strLocalHour,
    })
}

const WhatTimeIsIt = ({date, chosenTimeZone, timeZoneSearch, name, city}) => {
    const timeZone = useGetTimeIn(date, chosenTimeZone, timeZoneSearch);

    useEffect(() => {

    }, [timeZone]);

    return (
        <div>
            Pour {name} à {city} nous sommes :
            <p>
            {timeZone.strLocalDay} il est {timeZone.strLocalHour}
            </p>
        </div>
    );
}

export const WhatTime = () => {
    const {value:formDate, bind:bindFormDate, reset:resetFormDate} = useInput('');
    const {value:formTime, bind:bindFormTime, reset:resetFormTime} = useInput('');
    const [wantedDate, setWantedDate] = useState();

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                const myNewDate = new Date(formDate);
                myNewDate.setHours(formTime.split(':')[0] , formTime.split(':')[1]);
                setWantedDate(myNewDate)
                }}
                onReset={() => {
                    resetFormDate();
                    resetFormTime();
                    setWantedDate();
                }}>
                {/* <label> */}
                    Quelle date ?
                    <input id="inputsm" required className="form-control champs" name="event date" type="date" {...bindFormDate} />
                    <input id="inputsm" required className="form-control champs" name="event date" type="time" {...bindFormTime} />
                {/* </label> */}
                    <input type="submit" />
                    <input type="reset" />
            </form>
            {whisprUser.map((item, index) => (
                <WhatTimeIsIt
                date={wantedDate}
                chosenTimeZone={'Europe/Paris'}
                timeZoneSearch={item.timeZone}
                name={item.name}
                city={item.city}
                index={index}
                key={index}
                />
            ))}
        </div>
    );
};
