import { Outlet, NavLink } from "react-router-dom";
import styled, {css} from 'styled-components';

const RouteButton = styled.button`
    background-color:black;
    ${props => props.btnColor === "first" &&
        css`
            background-color:#255835;
    `}
    ${props => props.btnColor === "second" &&
        css`
            background-color:#774896;
    `}
    
    padding:3px 10px;
    color:#fff;
    border: 1px solid #333;
    cursor:pointer;
    &:hover {
        background:darkblue;
    }
`
const NavWrap = styled(NavLink)`
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
                <NavWrap to='/DetailApp1/carinfo'>
                    <RouteButton btnColor="first">디테일화면</RouteButton>
                </NavWrap>
                <NavWrap to='/DetailApp2'>
                    <RouteButton btnColor="second">디테일화면2</RouteButton>
                </NavWrap>
            </div>
            <Outlet />
        </>

    );
}

export default Nav;