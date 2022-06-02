import { Outlet, Link } from "react-router-dom";

function Nav(props) {
    return (
        <>     
         
            <div>
                <Link to='./DetailApp'>
                    <button>디테일화면</button>
                </Link>
                <Link to='./CarDraw'>
                    <button>디테일화면</button>
                </Link>
            </div>
            <Outlet />  
        </>

    );
}

export default Nav;