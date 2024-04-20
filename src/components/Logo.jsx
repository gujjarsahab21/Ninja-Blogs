import React from "react";
import icon from './ninja.png'; // Import the icon image file

function Logo({ width = '140px' }) {
    return (
        <img src={icon} alt="Logo" style={{ width: width }} /> 
    );
}

export default Logo;
