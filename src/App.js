import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Characters } from './Characters';
import axios from "axios";
import pokeback from "./img/pokeback.png";


function App() {

  const [characters, setCharacters] = useState([]);

  const functionData = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=15")
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
//background:"linear-gradient(130deg,#509fc9,#e83b59)", opacity:"0.4"
  return (
    <>
      <Navbar />
      <div className="container" draggable="false" style={{ maxWidth: "fit-content", backgroundImage: `url(${pokeback})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }} >

        <Characters characters={characters} />
      </div>
    </>

  );
}

export default App;
