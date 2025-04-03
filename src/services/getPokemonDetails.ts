import axios from 'axios'

export function getPokemonDetails(name: string) {
    const endpoint = `${import.meta.env.VITE_POKEAPI}/${name}`
    const response = axios.get(endpoint)

    return response
}