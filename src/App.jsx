import { useState } from 'react'
import TicTacToe from './components/tictactoe'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <TicTacToe/>
    </>
  )
}

export default App
