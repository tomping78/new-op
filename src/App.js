import './App.css';
import CarInfo from './CarInfo';
import DetailApp from './DetailApp';


function App() {
  return (
    <>
    <div className="App" style={{display:'flex', flexDirection:'column', flex:'1', height:'100vh'}} >
            <CarInfo />
            <DetailApp />
            
    </div>
    </>
  );
}

export default App;
