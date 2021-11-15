import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice'
import { useDispatch,useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuanity=useSelector(state=>state.cartSlice.totalQuantity)
  console.log(cartQuanity)
  const cartButton=()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={cartButton}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuanity}</span>
    </button>
  );
};

export default CartButton;
