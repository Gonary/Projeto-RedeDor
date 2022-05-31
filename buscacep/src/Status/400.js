import React from "react";
import './400.css'

function Status400(jsonEvents){
    const jsonEvent =jsonEvents.jsonEvents
     if (jsonEvent.status !== 400) {
       return null
    };
    

    return (
        <main className='mainStatus400'>
            <h2>Erro: {jsonEvent.status}</h2>
            <span>{jsonEvent.message}!</span>
        </main>
    )
}

export default Status400