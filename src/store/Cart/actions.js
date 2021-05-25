import {uiActions} from '../ui-slice';
import {cartActions} from './slice';



export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-7e6e2-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok) {
                throw new Error('Could not load firebase data');
            }
            
            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))

        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'Error',
                title: 'Error',
                message: 'Could not fetch cart data'
              }))

        }
    }
}



export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Sending...',
            message: 'Sending cart data'
          }))


        const sendRequest = async () => {
            const response = await fetch('https://react-http-7e6e2-default-rtdb.firebaseio.com/cart.json', 
            {method: 'PUT', body: JSON.stringify({
                items: cart.items,
                totalQuantity: cart.totalQuantity
            })})

            if(!response.ok) {
                throw new Error('Problem sending cart data');
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'Success',
                title: 'Success',
                message: 'Sent cart data successfully'
              }))        
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'Error',
                title: 'Error',
                message: 'Could not send cart data'
              }))
        }
    }
}

