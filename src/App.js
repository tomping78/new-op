import './App.css';
import {Row, Col, Input, Button } from 'antd';
import { useState } from 'react';

// let arr = [0,1,2,3,4,5,6,7,8,9,10]
// for (let i =0; i< arr.length; i ++) {
//   if(arr[i] % 3 === 0) {
//     console.log(arr[i])
//   }
  
// }


function App() {

  const [text, setText] = useState("change");

  function textOnChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <Row gutter={24}>
        <Col span={8}>
          <Input inputMode='text' value={text} onChange={textOnChange} />
        </Col>
        <Col span={8}>
          <Input inputMode='text' value={text} />
        </Col>
        <Col span={8}>
          <Button type='primary'>123</Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
