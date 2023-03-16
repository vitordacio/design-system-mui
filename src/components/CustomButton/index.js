
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const CustomButton = ({ variant, text, path, setOpen }) => {
    const navigate = useNavigate()
    const handleButton = () => {
        if (path) {
            return navigate(path)
        }
        if (setOpen) {
            return setOpen(true)
        }
    }

    return (
        <Button variant={variant} onClick={handleButton}>
            {text}
        </Button>
    )
}

export default CustomButton