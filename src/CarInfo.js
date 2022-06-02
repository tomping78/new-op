import { useState } from 'react';
import { Button, } from 'antd';
import React from 'react';
import CarModal from './CarModal'
import CarDraw from './CarDraw';
import RainBow from './RainBow';
import styled, {css} from 'styled-components'



const CarBrand = styled.span`
    color:#c8c8c8;
`
const ShadowCarStyle = styled(CarBrand)`
    box-shadow:2px 5px 7px #ccc; 
    padding:2px 20px;
`
const CarStyle = styled.h1`
    ${props => 
        props.fontSize === "large" && 
        css`
            font-size:30px;
    `}
    ${props =>
        props.fontSize === "medium" &&
        css`
            font-size: 20px;
    `}
    ${props =>
        props.fontSize === "small" &&
        css`
            font-size:10px;
    `}
    ${CarBrand} {
        font-weight:bold; color:#00c0c7;
    }
    &:hover {
        color:#339af0;
    }
`
const CarStyleBox = styled.div`
    background:white; 
    display:flex; 
    flex-direction:column; 
    flex: 1 1 0; padding:20px;
`

function CarInfo(props) {

    const [car, setCar] = useState({
        brand:"benz",
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
                return {...nextState, color:"Satin Purl White"}
            })
        }
    }

    return (
        <CarStyleBox>
              <CarStyle fontSize="large">My <ShadowCarStyle>{car.brand}</ShadowCarStyle></CarStyle>
              <p>It is a <span style={{color:'red', fontWeight:'bold'}}>{car.color}</span> {car.model} from {car.year}</p>
              <Button onClick={updateColor}>White</Button>
              <RainBow />
              <CarModal />
              <CarDraw />
        </CarStyleBox>
        
    );
}

export default CarInfo;