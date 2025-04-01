import { useEffect, useState } from 'react'
import { getPokemon } from '../services/getPokemon'
import { firstLetterUppercase } from '../functions/firstLetterUppercase'
import { PokemonInterface } from "../interfaces/PokemonInterface"

export function Card({ name, index }: { name: string, index: number }) {
    const [pokemon, setPokemon] = useState<PokemonInterface | undefined>(undefined)
    
    useEffect(() => {
        getPokemon(name)
            .then(response => setPokemon(response.data))
    }, [])

    const formattedIndex = index.toString().padStart(3, '0')

    return (
        <>
            {
                pokemon
                    ?
                        <section className={`card type-${pokemon.types[0].type.name}`}>
                            <figure>
                                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                            </figure>
                            <div className="number gray">
                                #{formattedIndex}
                            </div>
                            <h2>
                                {firstLetterUppercase(name)}
                            </h2>
                            <p>
                                <span className="gray">Type:</span>
                                &nbsp;
                                <span>{pokemon.types[0].type.name}</span>
                            </p>
                        </section>
                    :
                        <section className="card type-normal">
                            <h2>
                                Pokémon not found
                            </h2>
                            <p>
                                Type: not found
                            </p>
                        </section>
            }
        </>
    )
}