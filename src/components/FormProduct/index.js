import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import './styles.css'

const FormProduct = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField fullWidth label="Nome do produto" variant="standard" />
            <FormControl sx={{ m: 1, width: '184px' }}>
                <InputLabel htmlFor="outlined-adornment-amount">Preço</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    label="preco"
                />
            </FormControl>
            <TextField sx={{ m: 1, width: '184px' }}
                id="filled-number"
                label="Estoque"
                placeholder='Un'
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
            />
            <TextField fullWidth label="Descrição do produto" variant="standard" />
            <TextField fullWidth label="Imagem" variant="standard" />
        </Box>
    )
}

export default FormProduct