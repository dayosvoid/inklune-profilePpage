import React from 'react'
import { createContext,useState } from 'react'

const EditBioContext = createContext(null);


export const EditBioContextProvider = ({children})=>{
    const [fixUsername, setFixUsername] = useState('Bibian okoro');
    const [bioname, setbioname] = useState('As a proud Capricorn, I have a deep appriciation for nature, espcially my vibrant flowers. I also enjoys induiging in luxurious hair care that that reflects my personality.');


    return(
    <EditBioContext.Provider value={{bioname,setbioname,fixUsername, setFixUsername}}>
        {children}
    </EditBioContext.Provider>
    )
}
export default EditBioContext
