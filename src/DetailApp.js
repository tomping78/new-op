import React from 'react';

function DetailApp(props) {
    return (

<div style={{backgroundColor:'skyblue', display:'flex', flexDirection:'row', flex: '1 1 0', overflow:'hidden'}}>
              <div style={{ display:'flex', flex: '1 0 0', flexDirection:'column', overflowY:'auto'}}>
                <h2>siasiaai</h2>
                <div style={{display:'flex', flex: '1 0 0', flexDirection:'column', overflowY:'auto', padding:20}}>
                  555<br />555<br />5<br />555<br />555<br />555<br />555<br />5<br />555<br />555<br />555<br />555<br />555<br />5<br />555<br />555<br />555<br />555<br />555<br />5<br />555<br />555<br />
                </div>
              </div>
              <div style={{backgroundColor:'white', display:'flex', flex: '1 0 0', flexDirection:'column'}} className="box2">
                <h2>siasiaai</h2>
                <div style={{backgroundColor:'white', display:'flex', flex: '1 0 0', flexDirection:'column', overflowY:'auto', padding:20}}>
                  555<br />555<br />5<br />555<br />555<br />555<br />555<br />5<br />555<br />555<br />555<br />555<br />555<br />5<br />555<br />555<br />555<br />555<br />555<br />5<br />555<br />555<br />
                </div>
              </div>
        </div>
    );
}

export default DetailApp;