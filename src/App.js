import './App.css';
import CarInfo from './CarInfo';
import DetailApp from './DetailApp';
import Edit from './Edit';
import Nav from './Nav';
import Texty from '../node_modules/rc-texty/lib/index';
import styled from 'styled-components';
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
    
      <AppBox className="App">
        <BubbleArea className='bubbleMove texty-demo'>
          <Texty>Bubble moving project Success!</Texty>
        </BubbleArea>
        <Edit />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="/DetailApp1/carinfo" element={<CarInfo />} />
              <Route path="/DetailApp2" element={<DetailApp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppBox>
    </>
  );
}

export default App;
