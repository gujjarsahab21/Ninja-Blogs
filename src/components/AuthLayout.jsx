//protection k liye ye wali file banare h
// sbse phle hamesha ki trh ek fn banaenge then import krenge teeno cheeze jo isme kam ayegi
// declare these import statements inside fn
//then ham authstatus se puchenge ki log in ho ya nhi , useselectir se ayega
//directly kam ni krenge useeffect ko lnge phle useffect he bataega login ko bhejan h ki home pe
//sbse phle dekh  lete h kis kis depend h to phla to authstatus pe depend h also navigate and authentication 
//condtions laga laga ke check krte jana h 

import React, {useEffect, useState} from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Protected({children, authentication = 'true'}){
    const navigate = useNavigate()
    const [loader , setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate('/login')
        } else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate , authentication])

    return (
       loader ? <h1>loading...</h1> : <>{children} </>
    )
}