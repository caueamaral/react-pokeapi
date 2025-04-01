import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { SelectChangeEvent } from '@mui/material/Select';
import { firstLetterUppercase } from '../functions/firstLetterUppercase'

export function Filter({ selectedType, setSelectedType }: { selectedType: string, setSelectedType: React.Dispatch<React.SetStateAction<string>> }) {
    const types = [
        'all',
        'fire',
        'water',
        'grass',
        'bug',
        'normal'
    ]

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
                            {
                                types.map((type, index) => (
                                    <MenuItem
                                        key={index}
                                        value={type}
                                    >
                                        
                                        {firstLetterUppercase(type)}
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