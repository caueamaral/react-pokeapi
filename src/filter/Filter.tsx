import { useState } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Filter() {
    const types = [
        'All',
        'Fire',
        'Water',
        'Grass',
        'Bug',
        'Normal'
    ]

    return (
        <section className="filter">
            <div className="filter-container">
                <h1>
                    List cards with React JS
                </h1>
                <div>
                    <FormControl className="filter-form">
                        <InputLabel id="demo-simple-select-label">{types[0]}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            label="All"
                        >
                            {
                                types.map((type, index) => (
                                    <MenuItem key={index}>{type}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
        </section>
    )
}