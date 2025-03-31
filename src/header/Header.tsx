import pokeapiLogo from '../assets/logo-pokeapi.svg'

export function Header() {
    return (
        <header>
            <img src={pokeapiLogo} alt="PokéAPI logo" className="logo" />
          </header>
    )
}