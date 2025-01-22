import { useDebugValue } from "react";
import { useState,useEffect } from "react";
function useCurrencyInfo(currency){
    const[data,setData] = useState({});
    console.log("Currency",currency);
    useEffect(()=>{
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then((res)=>res?.rates)
        .then((res)=>setData(res.json()))
        //.catch(()=>console.log("Error while fetching currency info"))
        //console.log(res);
        console.log(data);
    },[currency])
    
    return data;
}

export default useCurrencyInfo;