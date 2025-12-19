import { useState } from 'react'
import './App.css'
import { MyButton } from './component/button/MyButton'
import SearchAppBar from './component/hader/AppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchAppBar/>
      {/* <MyButton label='送信'/> */}
    </>
  )
}

export default App
