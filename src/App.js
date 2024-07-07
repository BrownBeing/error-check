import {useState, useEffect} from 'react' ;
import './App.css';
import NewApp from './NewApp';
//import {Profile} from './NewApp';
import data from "./data.json";


export default function App() {
  const [pokemon, Setpokemon] =useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/client/data.json")
    .then((res)=>res.json())
    .then((data) => Setpokemon(data))
    .catch((error)=> console.error("there is an error :", error))
    }, []);
  
    return (
    
    <div className="App">
      <input />
      <table width="100%">
        <thead>
          <tr>
            <th>Column1</th>
            <th>Column2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((individual, index)=>{
            return(<tr key ={index}>
              <td>{individual.name.english}</td>
              <td>{individual.type.join(",")}</td>
              </tr>)
          })}
          
        </tbody>
      </table>
      
    </div>
  );
}


