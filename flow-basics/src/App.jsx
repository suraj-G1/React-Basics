import { useState } from 'react'

import './App.css'
import First from './First'
import Counter from './Counter'
// import Pass from './Pass'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <First/>
      <Counter/>
      {/* <Pass/> */}
      


    </>
  )
}

export default App
