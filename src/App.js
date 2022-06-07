import './App.css';
import CarInfo from './CarInfo';
import DetailApp from './DetailApp';
import Edit from './Edit';
import Nav from './Nav';
import Texty from '../node_modules/rc-texty/lib/index';
import styled from 'styled-components';
import React from "react";
import Split from "react-split";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppBox = styled.div`
  display:flex; flex-direction:column; flex:1; height:100vh;
`
const BubbleArea = styled.div`
  margin-top:70px;
`
const SplitBox = styled.div`
  display: flex;
  flex:1 1 auto;
  background:${props => props.color || "orange"};
  overflow:hidden;
  word-break: break-all;
  padding:10px;
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
              <Route path="/CarInfo" element={<CarInfo />} />
              <Route path="/DetailApp" element={<DetailApp />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Split
          sizes={[25, 50, 25]}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
          className="split-flex" // You'll need to define this. check styles.css
        >
          <SplitBox />
          <SplitBox color="green" >
            555555555555555555555555555555555555555555555555555
          </SplitBox>
          <SplitBox color="blue" >
            55555
          </SplitBox>
        </Split>
      </AppBox>
    </>
  );
}

export default App;
