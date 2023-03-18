
import { ProductCard } from './ProductCard';
import 'animate.css';

import './Products.css';
import {  useState } from 'react';
import data from '../data.json'

export const Products = () => {
  // const [productsAll, setProductsAll] = useState([]);

  console.log(data)
   

   return (
         <div>
               {data.map((data) => (
                  <ProductCard  key={data.id} data={data}  />
                      ))
                        }
                                     
        </div>

                               
   );
};
