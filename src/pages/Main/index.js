import CustomButton from '../../components/CustomButton';
import CustomTypography from '../../components/CustomTypography';
import Navbar from '../../components/Navbar';
import Product from '../../components/Product';
import './styles.css';



function Main() {
  return (
    <div className="container">
      <Navbar />
      <div className='container-content'>
        <CustomTypography classname={'h3'} variant={'h3'} text={'Nome da loja'} />
        <div className='handle-products'>
          <CustomTypography variant={'h4'} text={'Seus produtos'} />
          <CustomButton variant={'contained'} text={'Adicionar produto'} path={'/add-product'} />
        </div>
        <div className='products'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Main;
