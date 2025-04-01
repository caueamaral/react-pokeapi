import { useState } from 'react'

import { Filter } from '../filter/Filter'
import { Cards } from '../cards/Cards'

export function Main() {
    const [selectedType, setSelectedType] = useState('all')

    return (
        <>
            <main>
                <Filter selectedType={selectedType} setSelectedType={setSelectedType} />
                <Cards selectedType={selectedType} />
            </main>
        </>
    )
}