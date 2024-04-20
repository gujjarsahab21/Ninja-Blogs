import React from "react";
import icon from './ninja.png'; 

function Logo({ width = '140px' }) {
    return (
        <img src={icon} alt="Logo" style={{ width: width }} /> 
    );
}

export default Logo;
