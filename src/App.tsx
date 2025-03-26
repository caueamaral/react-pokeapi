import { useState } from 'react'
import pokeapiLogo from './assets/logo-pokeapi.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={pokeapiLogo} alt="PokéAPI logo" className="logo" />
        </a>
      </div>
      <h1>React JS project</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App