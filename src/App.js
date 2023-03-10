import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Characters } from './Characters';
import axios from "axios";


function App() {

  const [characters, setCharacters] = useState([]);

  const functionData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=30")
      .then(resp => {
        for (let i = 0; i < resp.data.results.length; i++) {
          axios.get(resp.data.results[i].url)
            .then(result => {
              setCharacters(prevArray => [...prevArray, result.data])
            })

        }
      })
  }
  useEffect(functionData, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Characters characters={characters} />
      </div>
    </>

  );
}

export default App;
