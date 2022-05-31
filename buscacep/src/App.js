import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import TrackCep from './TrackCep/TrackCEP';
import InputCPF from './Masks/Masks';


function App() {
  const [events, setEvents] = useState([]);
  const [inputerror, setInputError] = useState('')

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
        const array = jsonToArray(data);
        setEvents(array);

      })
      .catch(error => console.error)
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

      <TrackCep events={events} />

    </div>
  );
}

export default App;
