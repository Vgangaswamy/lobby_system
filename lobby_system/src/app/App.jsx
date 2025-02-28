import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const TIC_TAC_TOE = new Array (3).fill(new Array(3).fill(null)) //[[null, null, null], [null, null, null], [null, null, null]]

  return <div> 
      <h1>Tic Tac Toe</h1>
      <div>
      {TIC_TAC_TOE.map(
      (row, i)=>{
        return row.map((cell, j)=>{
          return <div className='cell'>{i}-{j}</div>

        })
      }
    )}</div>
    </div>
}

export default App
