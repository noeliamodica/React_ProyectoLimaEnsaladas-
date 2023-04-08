
import { ProductCard } from './ProductCard';
import 'animate.css';
import './Products.css';
import productos from '../productos'

export const Products = () => {
   

   

   return (
         <div>
               {productos.map((data) => (
                  <ProductCard  key={productos.id} productos={productos} />
                      ))
                        }
                                     
        </div>

                               
   );
};
