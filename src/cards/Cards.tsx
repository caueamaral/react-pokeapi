import { useEffect } from 'react'
import { Card } from './Card'
import { PokemonInterface } from '../interfaces/PokemonInterface'

interface CardsProps {
    selectedType: string,
    setSelectedType: React.Dispatch<React.SetStateAction<string>>,
    pokemons: PokemonInterface[]
}

export function Cards({ selectedType, setSelectedType, pokemons }: CardsProps ) {
    useEffect(() => {
        console.log('selectedType', selectedType)
    }, [selectedType])

    return (
        <>
            <article className="cards">
                {
                    pokemons
                        .map((pokemon, index) => {
                            if (! pokemon) return

                            return (
                                <Card
                                    key={index}
                                    selectedType={selectedType}
                                    setSelectedType={setSelectedType}
                                    pokemon={pokemon}
                                    index={index + 1}
                                />
                            )
                        })
                }
                
            </article>
        </>
    )
}