import { createContext,useState } from "react";
const SortFunction = createContext(null)

export const SortFunctionProvider =({children})=>{
    const [runPopular,setRunPopular] = useState(false)
    const [runLatest, setRunLatest] = useState(false)

    // to toggle the popular state
    const togglePopular = ()=>{
        setRunPopular(!runPopular)
    }

    // to toggle the Latest state
    const toggleLatest = ()=>{
        setRunLatest(!runLatest)
    }
    return(
        <SortFunction.Provider value={{toggleLatest,runLatest,togglePopular,runPopular}}>
          {children}
        </SortFunction.Provider>)
}
export default SortFunction