import './App.css';
import CarInfo from './CarInfo';
import DetailApp from './DetailApp';
import Edit from './Edit'
import Nav from './Nav'
import CarDraw from './CarDraw'
import Texty from '../node_modules/rc-texty/lib/index';
import styled from 'styled-components'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppBox = styled.div`
  display:flex; flex-direction:column; flex:1; height:100vh;
`
const BubbleArea = styled.div`
  margin-top:70px;
`

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="./DetailApp" element={<DetailApp />} />
          <Route path="./CarDraw" element={<CarDraw />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <AppBox className="App">
        <BubbleArea className='bubbleMove texty-demo'>
          <Texty>Bubble moving project Success!</Texty>
        </BubbleArea>
        <Edit />
        <CarInfo />
        <DetailApp />
      </AppBox>
    </>
  );
}

export default App;
