import React from "react";
import './trackCep.css'

function TrackCep(events) {
    const event = events.events
    if (!event || event.length === 0 || event[0].status !== 200) {
        return null
    };
    

    return (
        <main className='main'>
            <ul>
                {event.map(item =>
                    <li key={item.code} className="list">
                        <h2>CEP: {item.code}</h2>
                        <span>{item.address}</span>
                        <span>{item.district}</span>
                        <span>{item.city} - {item.state}</span>
                    </li>)}
            </ul>
        </main>
    )
}

export default TrackCep