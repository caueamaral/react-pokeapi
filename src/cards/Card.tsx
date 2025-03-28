import { useEffect, useState } from 'react'
import { getPokemon } from '../services/getPokemon'
import { PokemonInterface } from "../interfaces/PokemonInterface"

export function Card({ name, index }: { name: string, index: number }) {
    const [pokemon, setPokemon] = useState<PokemonInterface | undefined>(undefined)
    
    useEffect(() => {
        getPokemon(name)
            .then(response => setPokemon(response.data))
    }, [])

    const formattedIndex = index.toString().padStart(3, '0')
    const formattedName = name.trim().charAt(0).toUpperCase() + name.slice(1)

    return (
        <section className="card">
            {
                pokemon
                    ?
                        <>
                            <figure>
                                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                            </figure>
                            <div className="number gray">
                                #{formattedIndex}
                            </div>
                            <h2>
                                {formattedName}
                            </h2>
                            <p>
                                <span className="gray">Type:</span>
                                &nbsp;
                                <span>{pokemon.types[0].type.name}</span>
                            </p>
                        </>
                    :
                        <>
                            <h2>
                                Pokémon not found
                            </h2>
                            <p>
                                Type: not found
                            </p>
                        </>
            }
        </section>
    )
}