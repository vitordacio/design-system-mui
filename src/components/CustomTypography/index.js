import './styles.css'
import Typography from '@mui/material/Typography';

const CustomTypography = ({ classname, variant, text }) => {
    return (
        <Typography className={classname} variant={variant} gutterBottom>
            {text}
        </Typography>
    )
}

export default CustomTypography