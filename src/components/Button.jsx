// ek common button banate h
// function k andr default values di hai agr koi value dera h to thek varna ye to hai he
// ab thoda confusion hora hoga classname blank q hai and props ko aise q diya h chlo batate h
// jese button andr classname de diya jo classes deni h lekin kuch classes apne allow kra h user bhi pass krle kyuki classname me empty le rkha h
// ek dollar sign lga ke de skte h 
// props ko spread isliye kra h jese ek property hogyi className agr aisi he dusri properities dena hogi button pe to props use kr lenge  


import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}