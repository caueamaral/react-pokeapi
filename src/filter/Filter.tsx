import { useState } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Filter() {
    const types = [
        'all',
        'fire',
        'water',
        'grass',
        'bug',
        'normal'
    ]

    const [selectedType, setSelectedType] = useState(types[0])

    const handleChange = event => {
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
                            {
                                types.map((type, index) => (
                                    <MenuItem
                                        key={index}
                                        value={type}
                                    >
                                        
                                        {type}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
        </section>
    )
}