import { useEffect, useState } from 'react'
import { Card } from './Card'
import { getPokemons } from '../services/getPokemons'
import { PokemonInterface } from '../interfaces/PokemonInterface'

export function Cards() {
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
                        <Card key={index} name={pokemon.name} />
                    ))
                }
                
            </article>
        </>
    )
}