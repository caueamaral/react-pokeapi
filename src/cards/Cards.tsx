import { useEffect, useState } from 'react'
import { Card } from './Card'
import { getPokemons } from '../services/getPokemons'

export function Cards() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
            .then(response => setPokemons(response.data.results) )
    }, [])

    return (
        <>
            <article className="cards">
                {
                    pokemons.map(pokemon => (
                        <Card />
                    ))
                }
                
            </article>
        </>
    )
}