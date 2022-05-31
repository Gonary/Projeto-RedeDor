import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import TrackCep from './TrackCep/TrackCEP';
import InputCPF from './Masks/Masks';
import Status400 from './Status/400';


function App() {
  const [events, setEvents] = useState([]);
  const[jsonEvents, setJsonEvents] =useState('')

  const jsonToArray = (obj) => {
    const arr = [obj]
    return arr;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch(`https://ws.apicep.com/cep.json?code=${data.tracking}`)
      .then(response => response.json())
      .then(data => {
        const json = setJsonEvents(data)
        const array = jsonToArray(data);
        setEvents(array);
      })
      .catch(error => alert(events))
  }



  return (
    <div className='container'>
      <h1 className='title'>
        Buscador de CEP
      </h1>
      <form onSubmit={submitHandler}>
        <div className='containerInput'>
          <InputCPF
            className='input'
            type='text'
            name='tracking'
            placeholder='Digite seu CEP...'
          />
          <button name='trackCep' className='searchButton'>
            Buscar <FiSearch size={25} color='#FFF' />
          </button>
        </div>
      </form>
    
        <Status400 jsonEvents={jsonEvents}/>
   
        <TrackCep events={events}/>
        
    </div>
  );
}

export default App;
