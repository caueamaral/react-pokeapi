import { useEffect, useState } from 'react'
import { Card } from './Card'
import { getPokemons } from '../services/getPokemons'
import { PokemonInterface } from '../interfaces/PokemonInterface'

export function Cards({ selectedType, setSelectedType }: { selectedType: string, setSelectedType: React.Dispatch<React.SetStateAction<string>> }) {
    const [pokemons, setPokemons] = useState<PokemonInterface[]>([])

    useEffect(() => {
        getPokemons()
            .then(response => setPokemons(response.data.results))
    }, [])

    return (
        <>
            <article className="cards">
                {
                    pokemons.map((pokemon, index) => (
                        <Card key={index} name={pokemon.name} index={index + 1} />
                    ))
                }
                
            </article>
        </>
    )
}