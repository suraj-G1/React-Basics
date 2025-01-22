import { useState } from "react";

import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [password,setPassword] = useState("Suraj@123")
  const [length,setLength] = useState(8);
  const[charAllowed,setCharAllowed] = useState(false);
  const[numberAllowed,setNumberAllowed] = useState(false);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charAllowed)string+='@#$&*';
    if(numberAllowed)string+='0123456789'
    for(let i=0;i<length;i++){
      pass+=string[Math.floor(Math.random()*string.length)];
    }
    console.log(pass,length);
    setPassword(pass);
  },[length,charAllowed,numberAllowed])

  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numberAllowed])

  const passwordRef = useRef(null);

  const copyToClipboard=()=>{

    passwordRef.current.select()
    window.navigator.clipboard.writeText(password);
  }
  return (
    <div className="max-w-md flex items-center flex-col gap-6 mx-auto">
      <h1 className="font-bold text-3xl">Password Generator</h1>
      <div className="flex justify-center shadow-sm rounded-lg bg-gray-800  text-orange-500">
        <input type="text"
        value={password}
        placeholder="Password"
        readOnly
        ref={passwordRef}
        className="px-3 py-1 border-black border-[2px] rounded-md"
        />
        <button onClick={copyToClipboard}>Copy</button>
      </div>

      <div className="flex justify-center gap-8">
        {/* Length */}

        <div>
          <input
          type="range"
          min={8}
          max={20}
          value={length}
          onChange={(e)=>setLength(e.target.value)}
          >
            
          </input>
          <span>Length {length}</span>
        </div>


        {/* To include Numbers in Password */}
        <div>
          <input type="checkbox" id="number" onClick={()=>setNumberAllowed((prev)=> !prev)} />
          <span>Numbers</span>
        </div>

        {/* To include Characters in Password */}
        <div>
          <input type="checkbox" id="character" onClick={()=>setCharAllowed((prev)=>!prev)}/>
          <span>Character</span>
        </div>
      </div>
    </div>
  );
}

export default App;
