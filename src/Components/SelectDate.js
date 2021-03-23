import {useState} from 'react'


const SelectDate = (() => {
    const [date, setDate] = useState(new Date())
    const [eventName, setEventName] = useState("")

    return (
        <form onSubmit={() => console.log( "eventName : " , eventName, "date : ", date)}>
            <label>Quel êvenemment ?</label>
            <input type="text" value={eventName} onChange={(e) => setEventName((e.target.value))}/>
            <label>Quelle date ?</label>
            <input type="date" value={date} onChange={(e) => setDate((e.target.value))}/>
            <button type="submit" className="button">Envoyer</button>
        </form>
    )
})

export default SelectDate