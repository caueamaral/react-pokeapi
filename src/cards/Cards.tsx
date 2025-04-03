import { Card } from './Card'
import { PokemonInterface } from '../interfaces/PokemonInterface'

interface CardsProps {
    pokemons: PokemonInterface[]
}

export function Cards({ pokemons }: CardsProps ) {
    return (
        <>
            <article className="cards">
                {
                    pokemons
                        .map((pokemon, index) => {
                            if (! pokemon) return

                            return (
                                <Card key={index} pokemon={pokemon} index={index + 1} />
                            )
                        })
                }
                
            </article>
        </>
    )
}