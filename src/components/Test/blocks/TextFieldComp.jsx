import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../redux/actions'

const TextFieldComp = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(handleAmountChange(event.target.value));
    }
    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size='small '>
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount of questions"
                    type='number'
                    size='small'
                ></TextField>
            </FormControl>
        </Box>
    )
}

export default TextFieldComp