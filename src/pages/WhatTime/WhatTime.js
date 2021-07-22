import React, {useState, useEffect} from 'react'
import moment from 'moment';
import timezone from 'moment-timezone'
import {localesLang} from '../../config';
import {MONTH, DAY} from '../../utils/dateFunctions'
import {whisprUser} from '../../config';


const WhatTimeIsIt = ({chosenTimeZone, timeZoneSearch, name, city}) => {
    const [franceMoment, setFranceMoment] = useState(moment().tz(timeZoneSearch));
    const [localMoment, setLocalMoment] = useState(franceMoment.tz(timeZoneSearch));
    const [strLocalDay, setStrLocalDay] = useState("");
    const [strLocalHour, setStrLocalHour] = useState("");

    const [counter, setCounter] = React.useState(60);

    // Third Attempts
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setCounter(counter - 1)
    //     }, 1000);
    // }, [counter]);

    useEffect(() => {
        // const franceMoment = moment().tz(chosenTimeZone);
        // const localMoment = franceMoment.tz(timeZoneSearch);
        // const newDate = franceMoment.tz(timeZoneSearch).format("YYYY-MM-DD HH:mm:ss");
        // const localDate = new Date(newDate);//.toLocaleString(localesLang, {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric"});

        setTimeout(() => {
            setFranceMoment(moment().tz(chosenTimeZone));
            setLocalMoment(franceMoment.tz(timeZoneSearch));
            const newDate = franceMoment.tz(timeZoneSearch).format("YYYY-MM-DD HH:mm:ss");
            const localDate = new Date(newDate);
            console.log('heure : ', Date.now());
            setStrLocalDay(localDate.toLocaleString(localesLang, {weekday: "long", month: "long", day: "numeric"}));
            setStrLocalHour(localDate.toLocaleString(localesLang, {hour: "numeric", minute: 'numeric', second:'numeric'}));
        }, 1000);
        // return clearInterval(timer);
    }, [chosenTimeZone, franceMoment, timeZoneSearch]);

    console.log('chosenTimeZone : ', chosenTimeZone);
    console.log('timeZoneSearch : ', timeZoneSearch);
    // const month = MONTH[localMoment.month() + 1];
    // const day = DAY[localMoment.day()];
    // console.log('hour : ', localMoment.hour());
    // console.log('month : ', MONTH[localMoment.month() + 1])
    // console.log('localesLang', localesLang);
    // console.log('heure à :', timeZoneSearch, ":", localMoment.toLocaleString({weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric"}));
    // const newDate = franceMoment.tz(timeZoneSearch).format("YYYY-MM-DD HH:mm:ss");
    // console.log('str : ', newDate);
    // const localDate = new Date(newDate);//.toLocaleString(localesLang, {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric"});
    // console.log('localDate :', localDate.toLocaleString());
    // const strLocalDay = localDate.toLocaleString(localesLang, {weekday: "long", month: "long", day: "numeric"});
    // const strLocalHour = localDate.toLocaleString(localesLang, {hour: "numeric", minute: 'numeric', second:'numeric'});
    // console.log();

    return (
        <div>
            Pour {name} à {city} nous sommes :
            <p>
            {strLocalDay} il est {strLocalHour}
            </p>
        </div>
    );
}

export const WhatTime = () => {
    const local = new Date();

    return (
        <div>
            text
            {whisprUser.map((item, index) => (
                <WhatTimeIsIt
                // key={index}
                chosenTimeZone={'Europe/Paris'}
                timeZoneSearch={item.timeZone}
                name={item.name}
                city={item.city}
                />
            ))}
            {/* {utcDate} */}
            {/* {local.getUTCSeconds()} */}
            {/* <text style={{textAlign: 'center', width: '100%'}}>hello</text> */}
        </div>
    );
};
