import { useState } from 'react'
import Header from './components/Header'


function HomePage(){
  return (
      <>
      <Header />
      <Header name="Pak Dhika"/>
      <Header name="Mang Dea"/>
      </>
  )
}

function App() {
  const students = ['Rahmat','Saeful','Jaenap','Jamal']
  const [likes, setLikes] = useState(0)

  function handleClick(){
      setLikes(likes + 1)
  }

  return(
      <>
      <HomePage />
      <ul>
          {
              students.map((student)=>(
                  <li key={student}>{student}</li>
              ))
          }
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
      </>
  )
}

export default App
