import axios from 'axios'

export function getPokemons() {
    const endpoint = import.meta.env.VITE_POKEAPI
    const response = axios.get(endpoint)

    return response
}