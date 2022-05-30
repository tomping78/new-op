import React from 'react';
import styled from 'styled-components';


const RainBowButton = styled.div`
    position: relative; width:${props => props.btnWidth || "200px"}; height:30px; margin:5px 0; border-radius: 5px; overflow: hidden; text-align: center; color:#fff; cursor:pointer;
`
const RainMotion = styled.div`
    position: absolute; top:-30px; left:-50px; width:300px; height:70px; background:#888 url("/static/media/rainbow.301ab06335eeb7f1c486.gif") no-repeat 0 0; filter: blur(10px); -webkit-filter: blur(10px); background-size: cover; z-index: 10;
`
const RainText = styled.span`
    position: absolute; top:0; left:0; display: block; width:100%; padding:5px 0; text-align: center; color:#fff; z-index: 555;
`
function RainBow(props) {
    return (
            <RainBowButton btnWidth="135px">
                  <RainMotion />
                  <RainText>Rainbow Button</RainText>
            </RainBowButton>
    );
}

export default RainBow;