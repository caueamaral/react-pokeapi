import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Filter() {
    return (
        <section className="filter">
            <div className="filter-container">
                <h1>
                    List cards with React JS
                </h1>
                <div>
                    <FormControl className="filter-form">
                        <InputLabel id="demo-simple-select-label">All</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            label="All"
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="normal">Normal</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </section>
    )
}