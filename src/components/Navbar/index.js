import './styles.css'
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <navbar>
            <div onClick={() => navigate('/')}>
                <img src={logo} />
                <p>Market Cubos</p>
            </div>
        </navbar>
    )
}

export default Navbar