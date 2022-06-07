import { Outlet, NavLink } from "react-router-dom";
import styled, {css} from 'styled-components';


const sizes = {
    large: {
      height: '3rem',
      fontSize: '1.25rem'
    },
    medium: {
      height: '2.25rem',
      fontSize: '1rem'
    },
    small: {
      height: '1.75rem',
      fontSize: '0.875rem'
    }
  };

const colorb = {
    primary : {
        backgroundColor:'#474788',
    },
    basic : {
        backgroundColor:'#878226'
    }
}

const RouteButton = styled.button`
    background-color:black;
    ${props => props.btnColor === "first" &&
        css`
            ${colorb.primary}
    `}
    ${props => props.btnColor === "second" &&
        css`
            ${colorb.basic}
    `}
    
    ${sizes.medium}
    padding:3px 10px;
    color:#fff;
    border: 1px solid #333;
    cursor:pointer;
    &:hover {
        background:darkblue;
    }
`
const NavWrap = styled(NavLink)`
    .booting {color:#aaa}
    overflow:hidden;
    border:1px solid white;
    padding:5px 0;
    &.active {
        border:3px dotted red;
    }
`

function Nav(props) {
    return (
        <>     
            <div>
                <NavWrap to='/'>
                    <RouteButton>Home</RouteButton>
                </NavWrap>
                <NavWrap to='/CarInfo'>
                    <RouteButton btnColor="first" className="booting">디테일화면</RouteButton>
                </NavWrap>
                <NavWrap to='/DetailApp'>
                    <RouteButton btnColor="second">디테일화면2</RouteButton>
                </NavWrap>
            </div>
            <Outlet />
        </>

    );
}

export default Nav;