import '../css/Cards.css'
import '../css/Types.css'
import { Card } from './Card'
import { PokemonInterface } from '../interfaces/PokemonInterface'
interface CardsProps {
    selectedType: string,
    pokemons: PokemonInterface[]
}

export function Cards({ selectedType, pokemons }: CardsProps ) {
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