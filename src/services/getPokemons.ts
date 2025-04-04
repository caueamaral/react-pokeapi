import axios from 'axios'

export function getPokemons() {
    const endpoint = `${import.meta.env.VITE_POKEAPI}/?limit=151`
    const response = axios.get(endpoint)

    return response
}