// options ke bad ? ye islie lgaya h taki agr option ki andr value ho tbhi loop krna nhi to agr value nhi hogi aur loop kr denge to crash ho jayega
// forwardref wala kaam apn export me krenge is baar(koi dikkt nhi kahi bhi karo 2 jagah me se)

import React,{useId} from "react";
function Select({
    options,
    label,
    className,
    ...props    
}, ref ){
    const id  = useId()
    return(
        <div className="w-full" >
            {label && <label htmlFor= {id} className=""> </label> }
            <select 
                {...props}
                id = {id}
                ref = {ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                    </option>
            ))}
            </select>
        </div>
    )
}
export default   React.forwardRef(Select)
//ab post card banana h
