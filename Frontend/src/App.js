import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cities')
    .then((res) => res.json())
    .then((res) => setCities(res))
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {console.log(cities)}
      <div className='Container'>
        <h2>List of Cities</h2>
        <div className='sub-content'>
          {
            cities.map((item, idx) => {
              return (
                <div className='city' key={idx}>
                  <p>{item.name}</p>
                  <p>{item.state}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
