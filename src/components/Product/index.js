import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import product from '../../assets/product.svg'

const Product = () => {
    return (
        <Card sx={{ maxWidth: 232, borderRadius: '16px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={product}
                    alt="single product"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nome do produto
                    </Typography>
                    <Typography className='caption' variant="caption">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography className='overline' gutterBottom variant="overline" component="div">
                            3 UNIDADES
                        </Typography>
                        <Typography className='body2' gutterBottom variant="body2" component="div">
                            R$ 99,00
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product