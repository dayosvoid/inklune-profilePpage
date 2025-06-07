import { useState, useEffect } from "react";

export const useFetch = (api) => {
    const [datas, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const getData = async ()=> {
            try {
                const res = await fetch(api)
                const result = await res.json()
                setData(result) 
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },)
    return {datas, isLoading}
}