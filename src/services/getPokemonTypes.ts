import axios from 'axios'

export function getPokemonTypes() {
    const endpoint = `${import.meta.env.VITE_POKEAPI}/type`
    const response = axios.get(endpoint)

    return response
}