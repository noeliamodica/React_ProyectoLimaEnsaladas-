import { ChevronDown, ChevronUp } from '../icons'
import { removeItem } from '../reducers/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, image, name, price, amount}) =>{

    const dispatch = useDispatch()

    function handleOnClick () {
        dispatch(removeItem(id));
    }
  
   
    return (
        <article>
            <img src={image} alt='name'/> 
            <div>
                <h4> {name} </h4>
                <h4> $ {price} </h4>
                <button onClick={handleOnClick} > Sacar </button>
            </div>
            <div>
                <button> 
                    <ChevronUp />
                </button>
                <p> {amount} </p>
                <button> 
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}
export default CartItem