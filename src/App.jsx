import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('Data.json')
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData.data); // Access the 'data' property in your JSON
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      {data && (
        <>
          <h2>Health Category</h2>
          <ul >
            {data.health.map((item) => (
           <li key={item.title} style={{ backgroundColor: item.styles.buttonBackground }}>
            <strong>{item.title}</strong>
           <p>{item.description}</p>
          <p style={{color: data.health[0].styles.textColor}}>Price: {item.price}</p>
           <button>{item.button}</button>
          </li>
  ))}
</ul>


          <h2>Education Category</h2>
          <ul>
            {data.education.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
                <button>{item.button}</button>
              </li>
            ))}
          </ul>

          <h2>Clothing Category</h2>
          <ul>
            {data.clothing.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
                <button>{item.button}</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;
