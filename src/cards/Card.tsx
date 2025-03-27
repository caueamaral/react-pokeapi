import { useEffect, useState } from 'react'
import { getPokemon } from '../services/getPokemon'
import { PokemonInterface } from "../interfaces/PokemonInterface"

export function Card({ name }: { name: string }) {
    const [pokemon, setPokemon] = useState<PokemonInterface | undefined>(undefined)

    useEffect(() => {
        getPokemon(name)
            .then(response => setPokemon(response.data))
    }, [])

    return (
        <section className="card">
            {pokemon ? <h2>{pokemon.name}</h2> : <h2>Pokémon not found</h2>}
            
            {pokemon ? <div>{pokemon.types[0].type.name}</div> : <div>Type not found</div>}
        </section>
    )
}