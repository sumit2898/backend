import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import axios from 'axios'

function App() {
  const [data, setData] = useState(0)

  useEffect(() => {
   axios.get("/api/data")
   .then((response) => {
    setData(response.data)
   })
   .catch((error) => {
    console.log(error);
    
   })
  }, [])
  

  return (
    <>
      <h1>Full Stack Project </h1>
       <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Gender:</strong> {data.gender}</p>

      
    </>
  )
}

export default App
