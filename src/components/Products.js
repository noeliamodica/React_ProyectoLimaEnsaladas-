
import { ProductCard } from './ProductCard';
import 'animate.css';
import './Products.css';
import cartItems from '../cartItems'

export const Products = () => {
   

   return (
         <div>
               {cartItems.map((cartItems) => (
                  <ProductCard  key={cartItems.id} cartItems={cartItems} />
                      ))
                        }
                                     
        </div>

                               
   );
};
