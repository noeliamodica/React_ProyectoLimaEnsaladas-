
import CartItem from './cartItem';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar } from './NavBar';
import { ProductCard } from './ProductCard';
import { clearCart } from '../reducers/cart/cartSlice';



export function CartContainer () {

    const dispatch = useDispatch()
   
    const {cartItems, total, amount} = useSelector((store)=>store.cart) 

    if (amount < 1){
        return(
            <>
            <NavBar />
        <section className='cart'>

                <h2>    Carrito de compras </h2>
                <h4 className='empty-cart'> Su carrito esta vacio </h4>

        </section>
        </>
        )
    }

   return (
    <>
    <NavBar />
    <section className='cart'>

        <h2>    Carrito de compras </h2>
             <div> 
            
                     
                {cartItems.map((item)=>{
                        return <CartItem key={item.id} {...item} />
                })}
             </div>

             <footer>
                <hr />
                <div className='cart-total'>
                <h4> total <span>$ {total}  </span> </h4>
                </div>

                <button className='btn clear-btn' onClick={()=>dispatch(clearCart())}
                > Vaciar carrito </button>
             </footer>

     </section>
     </>
   )                           
   ;
};
