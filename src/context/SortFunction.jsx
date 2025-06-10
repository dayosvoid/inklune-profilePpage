import { createContext,useState } from "react";
const SortFunction = createContext(null)

export const SortFunctionProvider =({children})=>{
    const [runPopular,setRunPopular] = useState(false)
    const [runLatest, setRunLatest] = useState(true)

    // to toggle the popular state
    const togglePopular = ()=>{
        setRunPopular(!runPopular)
    }

    // to toggle the Latest state
    const toggleLatest = ()=>{
        setRunPopular(!runPopular)
    }
    return(
        <SortFunction.Provider value={{togglePopular,runPopular}}>
          {children}
        </SortFunction.Provider>)
}
export default SortFunction