import { useEffect, useState } from 'react'
import { firstLetterUppercase } from '../functions/firstLetterUppercase'
import { getPokemonDetails } from '../services/getPokemonDetails'
import { PokemonInterface } from '../interfaces/PokemonInterface'
import { PokemonDetailsInterface } from '../interfaces/PokemonDetailsInterface'
interface CardProps {
    selectedType: string,
    setSelectedType: React.Dispatch<React.SetStateAction<string>>
    pokemon: PokemonInterface,
    index: number
}

export function Card({ selectedType, setSelectedType, pokemon, index }: CardProps) {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsInterface>()
    const formattedIndex = index.toString().padStart(3, '0')

    useEffect(() => {
        getPokemonDetails(pokemon.name)
            .then(response => setPokemonDetails(response.data))
    }, [])

    useEffect(() => {
        if (! pokemonDetails) return

        console.log('pokemonDetails', pokemonDetails.types[0].type.name)
        console.log('selectedType', selectedType)
        console.log('--------')
    }, [pokemonDetails])

    // useEffect(() => {
    //     console.log('pokemonDetails', pokemonDetails)
    //     console.log('selectedType', selectedType)
    // }, [selectedType])

    return (
        <>
            {
                pokemonDetails && pokemonDetails.types[0].type.name == selectedType && (
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
                )
            }
        </>
    )
}