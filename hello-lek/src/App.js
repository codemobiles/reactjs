import React, {useState, useEffect} from 'react'

export default function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Initial")    
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <br/>
      {/* JSX */}
      <button onClick={()=>setCount(count+1)}>ADD</button>
    </div>
  )
}
