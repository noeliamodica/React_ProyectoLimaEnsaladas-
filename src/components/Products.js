
import { ProductCard } from './ProductCard';
import 'animate.css';

import './Products.css';

import data from '../data.json'

export const Products = () => {
   

   

   return (
         <div>
               {data.map((data) => (
                  <ProductCard  key={data.id} data={data} />
                      ))
                        }
                                     
        </div>

                               
   );
};
