import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector } from 'react-redux';

const Cart = (props) => {

  const cartItems = useSelector(state => state.cart.items);


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length !== 0 && <ul>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={Math.random().toString()}
              item={item}
            />
          )
        })}
        
      </ul>}

      {cartItems.length === 0 && <p style={{textAlign: 'center'}}>There is nothing in your cart</p>}
    </Card>
  );
};

export default Cart;
