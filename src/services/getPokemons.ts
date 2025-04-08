import axios from 'axios'

export function getPokemons() {
    const endpoint = `${import.meta.env.VITE_POKEAPI}/pokemon/?limit=151`
    const response = axios.get(endpoint)

    return response
}