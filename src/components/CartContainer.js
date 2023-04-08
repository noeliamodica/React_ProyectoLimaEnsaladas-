

import { useSelector } from 'react-redux';
import { NavBar } from './NavBar';

export function CartContainer () {
   
    const {productos, total, amount} = useSelector((store)=>store.cart) 

    if (amount < 1){
        return(
            <>
            <NavBar />
        <section className='cart'>
            <header>
                <h2>    Carrito de compras </h2>
                <h4 className='empty-cart'> Su carrito esta vacio </h4>
            </header>
        </section>
        </>
        )
    }
   

   return (
    <>
    <NavBar />
     <div>     Cart     </div>
     </>
   )                           
   ;
};
