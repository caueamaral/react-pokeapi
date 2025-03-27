import pokeapiLogo from '../assets/logo-pokeapi.svg'

export function Header() {
    return (
        <header>
            <img src={pokeapiLogo} alt="PokéAPI logo" className="logo" />
            <h1>
                List cards with React JS
              </h1>
          </header>
    )
}