import React, { useState} from "react";
import './app.css';

//definicion estados
// class TrafficLight extends Component {
//   constructor(){
//     super();
//       this.state = {
//         estadoRoja: "apagada",
//         estadoAmarilla: "apagada",
//         estadoVerde: "apagada"
//       };
//   }
function App() {
const [ color, setColor ] = useState('');
    // Semaforo
    return (
      <>
      <div className = "supportTop"></div>
      
      <div className = "container">
        <div className = "trafficControl">
          <div onClick = { () => setColor('red')} className = {`redLight ${ color === "red" ? "shadow" : "" } `}>
          </div>
          <div onClick = { () => setColor('yellow')} className = {`yellowLight ${ color === "yellow" ? "shadow" : "" } `}>
          </div>
          <div onClick = { () => setColor('green')} className = {`greenLight ${ color === "green" ? "shadow" : "" } `}>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
