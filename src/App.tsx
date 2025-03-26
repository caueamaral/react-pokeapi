import pokeapiLogo from './assets/logo-pokeapi.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <article>
          <header>
            <img src={pokeapiLogo} alt="PokéAPI logo" className="logo" />
            <h1>
                List cards with React JS
              </h1>
          </header>
          <main>
            Main
          </main>
        </article>
      </div>
      <footer>
        PokéAPI 2025 - All rights reserved.
      </footer>
    </>
  )
}

export default App