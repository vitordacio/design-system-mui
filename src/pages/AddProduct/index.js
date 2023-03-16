import CustomTypography from '../../components/CustomTypography';
import FormProduct from '../../components/FormProduct';
import Navbar from '../../components/Navbar';
import CustomButton from '../../components/CustomButton'
import './styles.css';
import SnackBar from '../../components/SnackBar';
import { useState } from 'react'


function AddProduct() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <Navbar />
      <div className='container-content'>
        <CustomTypography classname={'h3'} variant={'h3'} text={'Nome da loja'} />
        <CustomTypography className={'h4'} variant={'h4'} text={'Adicionar produto'} />
        <FormProduct />
        <div style={{ borderBottom: '1px solid #BFBFBF', marginTop: '83px', marginBottom: '35px' }} />
        <div className='product-actions'>
          <CustomButton variant={'text'} text={'Cancelar'} />
          <CustomButton variant={'contained'} text={'Adicionar produto'} setOpen={setOpen} />
        </div>
        <SnackBar open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default AddProduct;
