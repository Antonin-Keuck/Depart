import {useState, useEffect} from 'react'
import Advancement from '../../Components/Advancement'
import SelectDate from '../../Components/SelectDate'
import "./HowLong.css"


function chooseYear(date) {
        const currentDate = new Date()
        const begin = new Date(date)
        const month = ( (begin.getMonth() + 1 < 10 ? '0' + (begin.getMonth() + 1) : begin.getMonth() + 1 )  );
        const day = ( (begin.getDate() < 10 ? '0' + (begin.getDate()) : begin.getDate() ));

        return (`${currentDate.getFullYear() - 1}-${month}-${day}`)
}

export const HowLong = () => {

    const [date, setDate] = useState(new Date())
    const [beginDate, setBeginDate] = useState(new Date())
    const [eventName, setEventName] = useState("")

    // useEffect(() => {

    // }, [])

    return (
        <div>
            <div>
                <h1 className="howLong-form-title"> Personnalisez ce widget</h1>
                <div className="howLong-form-container">
                    <form className="howLong-form" onSubmit={() => console.log( "eventName : " , eventName, "date : ", new Date(date))}>
                        <label> Évènement : {'\n'} </label>
                        <input id="inputsm"  className="form-control champs" name="cityAdress" type="text" value={eventName} onChange={(e) => setEventName((e.target.value))} /> {'\n'}
                        <label> Date : {'\n'} </label>
                        <input id="inputsm"  className="form-control champs" name="coachingBeginDate" type="date" value={date} onChange={(e) => {
                            setDate((e.target.value))
                            setBeginDate(chooseYear(e.target.value))
                        }
                        } /> {'\n'}
                    </form>
                </div>
            </div>
            <Advancement
            beginDate={beginDate}
            endDate={date}
            greenFirst={true}key="0">{eventName}</Advancement>
        </div>
    )


    return (
        <div>
        <SelectDate/>
        </div>

    )
}
