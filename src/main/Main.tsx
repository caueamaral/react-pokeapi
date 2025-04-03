import { useEffect, useState } from 'react'

import { getPokemons } from '../services/getPokemons'
import { PokemonInterface } from '../interfaces/PokemonInterface'

import { Filter } from '../filter/Filter'
import { Cards } from '../cards/Cards'

export function Main() {
    const [pokemons, setPokemons] = useState<PokemonInterface[]>([])
    const [selectedType, setSelectedType] = useState('all')

    useEffect(() => {
        getPokemons()
            .then(response => {
                setPokemons(response.data.results)
            })
    }, [])
    
    return (
        <>
            <main>
                <Filter
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
                <Cards
                    selectedType={selectedType}
                    pokemons={pokemons}
                />
            </main>
        </>
    )
}