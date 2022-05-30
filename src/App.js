import './App.css';
import CarInfo from './CarInfo';
import DetailApp from './DetailApp';
import Edit from './Edit'
import Texty from '../node_modules/rc-texty/lib/index';
import styled from 'styled-components'

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
        <CarInfo />
        <DetailApp />
      </AppBox>
    </>
  );
}

export default App;
