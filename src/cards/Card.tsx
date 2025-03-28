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
            {
                pokemon
                    ?
                        <>
                            <figure>
                                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                            </figure>
                            <div className="number gray">
                                #001
                            </div>
                            <h2>
                                {pokemon.name}
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