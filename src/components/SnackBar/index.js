import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './styles.css'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = ({ open, setOpen }) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={(e) => handleClose(e)}>
            <Alert className='snackbar' onClose={(e) => handleClose(e)} severity="success" sx={{ width: '400px' }}>
                Produto adicionado com sucesso!
            </Alert>
        </Snackbar>
    );
}

export default SnackBar;