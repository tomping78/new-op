import { useState } from 'react';
import React from 'react';

function CarInfo(props) {

    const [car, setCar] = useState({
        brand:"mercedes benz",
        model:"e350",
        year:"2019",
        color:"black"
    })
    const updateColor = () => {
        if (car.color === "black") {
            setCar(nextState => {
                return {...nextState, color:"white"}
            })
        } else {
            setCar(nextState => {
                return {...nextState, color:"blue"}
            })
        }
    }

    return (
        <div style={{backgroundColor:'red', display:'flex', flexDirection:'column', flex: '2 1 0', padding:20}}>
              <h1>My {car.brand}</h1>
              <p>It is a <h1>{car.color}</h1> {car.model} from {car.year}</p>
              <button type='button' onClick={updateColor} style={{background:'blue', color:'white', padding:5 }} >White</button>
        </div>
    );
}

export default CarInfo;