import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'animate.css';
import './Products.css';
import { useContext } from 'react';
import { dataContext } from './Context/DataContext';

export const Products = () => {
   
   const { data }= useContext(dataContext);

   return data.map((product) => {
         return (
            <div key={product.id}>
           <h3> {product.nombre} </h3>
           </div>
       )
      }                               
      )
                       
  
}