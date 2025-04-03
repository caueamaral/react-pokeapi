import { useEffect, useState } from 'react'
import { firstLetterUppercase } from '../functions/firstLetterUppercase'
import { getPokemonDetails } from '../services/getPokemonDetails'
import { PokemonInterface } from '../interfaces/PokemonInterface'

interface CardProps {
    pokemon: PokemonInterface,
    index: number
}

export function Card({ pokemon, index }: CardProps) {
    const formattedIndex = index.toString().padStart(3, '0')
    const [pokemonDetails, setPokemonDetails] = useState()

    useEffect(() => {
        getPokemonDetails(pokemon.name)
            .then(response => setPokemonDetails(response.data))
    }, [])

    return (
        <>
            {
                pokemonDetails
                    ?
                        <section className={`card type-${pokemonDetails.types[0].type.name}`}>
                            <figure>
                                <img src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemon.name} />
                            </figure>
                            <div className="number gray">
                                #{formattedIndex}
                            </div>
                            <h2>
                                {firstLetterUppercase(pokemon.name)}
                            </h2>
                            <p>
                                <span className="gray">Type:</span>
                                &nbsp;
                                <span>{pokemonDetails.types[0].type.name}</span>
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