
import { ProductCard } from './ProductCard';
import 'animate.css';
import './Products.css';
import productos from '../productos'

export const Products = () => {
   

   

   return (
         <div>
               {productos.map((productos) => (
                  <ProductCard  key={productos.id} productos={productos} />
                      ))
                        }
                                     
        </div>

                               
   );
};
