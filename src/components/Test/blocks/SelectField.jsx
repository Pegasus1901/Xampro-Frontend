import { FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleCategoeryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions';


const SelectField = (props) => {
    const { label, option } = props;
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value);
        switch (label) {
            case "Categoery":
                dispatch(handleCategoeryChange(event.target.value));
                break;

            case "Difficulty":
                dispatch(handleDifficultyChange(event.target.value));
                break;

            case "Type":
                dispatch(handleTypeChange(event.target.value));
                break;

            default:
                break;
        }
    };
    return (
        <Box mt={3} width='100%'>
            <FormControl fullWidth size='small'>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {option.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>

        </Box>
    )
}

export default SelectField