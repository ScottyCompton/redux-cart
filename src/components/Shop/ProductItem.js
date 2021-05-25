import Card from '../UI/Card';
import {cartActions} from '../../store/Cart/slice';
import {useDispatch} from 'react-redux';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {

  const dispatch = useDispatch();
  
  const handleAddToCartClick = () => {
    dispatch(cartActions.addItemToCart({...props, totalPrice: price}))
  }

  const { title, price, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCartClick}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
