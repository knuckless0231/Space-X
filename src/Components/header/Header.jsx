import React from "react";
import s from "./Header.module.css"
import {Routes, Route} from 'react-router-dom';


const Header = ()=>{
    return <div className={s.header}>
    <img className={s.headerLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/1280px-SpaceX-Logo-Xonly.svg.png" alt="logo" />
    <Routes>
    {/* <nav><Route path = 'navTechRaketa' element = {#} /> 23</nav>
    <nav> <Route path = 'navTechCapsula' element = {#} />32 </nav> */}
    </Routes>
    <a className={s.link} href="https://en.wikipedia.org/wiki/SpaceX_Dragon">About Space-X</a>
    </div>
}

export default Header;