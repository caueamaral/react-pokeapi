import { useEffect, useState } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { SelectChangeEvent } from '@mui/material/Select';
import { firstLetterUppercase } from '../functions/firstLetterUppercase'
import { getPokemonTypes } from '../services/getPokemonTypes';
import { PokemonTypeInterface } from '../interfaces/PokemonTypeInterface'

export function Filter({ selectedType, setSelectedType }: { selectedType: string, setSelectedType: React.Dispatch<React.SetStateAction<string>> }) {
    const [types, setTypes] = useState<PokemonTypeInterface[]>([])

    useEffect(() => {
        getPokemonTypes()
            .then(response => setTypes(response.data.results))
    }, [])
    
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedType(event.target.value)
    }

    return (
        <section className="filter">
            <div className="filter-container">
                <h1>
                    List cards with React JS
                </h1>
                <div>
                    <FormControl className="filter-form">
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedType}
                            label="Type"
                            onChange={handleChange}
                        >
                            <MenuItem value="all">All</MenuItem>
                            {
                                types
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((type, index) => {
                                        const ignoreTypes = [
                                            'flying',
                                            'steel',
                                            'dark',
                                            'stellar',
                                            'unknown'
                                        ]
                                        
                                        if (ignoreTypes.includes(type.name)) {
                                            return
                                        }
                                        
                                        return (
                                            <MenuItem
                                                key={index}
                                                value={type.name}
                                            >
                                                {firstLetterUppercase(type.name)}
                                            </MenuItem>
                                        )
                                })
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
        </section>
    )
}