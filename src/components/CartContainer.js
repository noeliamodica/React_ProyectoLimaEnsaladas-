
import CartItem from './cartItem';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar } from './NavBar';
import { ProductCard } from './ProductCard';
import { clearCart } from '../reducers/cart/cartSlice';
import {Row, Col, Image, ListGroup, Button, Card, Form, Container }  from 'react-bootstrap';
import { calculateTotals } from '../reducers/cart/cartSlice';
import { useEffect } from 'react';


export function CartContainer () {

    const dispatch = useDispatch()
   
    const {cartItems, total, amount} = useSelector((store)=>store.cart) 

    useEffect(()=>{
        dispatch(calculateTotals());
    }, [cartItems]);


    if (amount < 1){
        return(
            
           
            <Card>
            <Col md={3} >
            <ListGroup.Item>
                <p>    Carrito de compras </p>
                <p> Su carrito esta vacio </p>
            </ListGroup.Item>
            </Col>
            </Card>
             
        )
    }

   return (
    <>
         
         <Container> 
            <ListGroup variant='flush'>
            <ListGroup.Item>
                 <Col>  Carrito de compras </Col>
            </ListGroup.Item>
           
             <div> 
                      
                {cartItems.map((item)=>{
                        return <CartItem key={item.id} {...item} />
                })}
             </div>
             </ListGroup>
             <footer>
                <hr />
                <div className='cart-total'>
                <h4> total <span>$ {total.toFixed(2)}  </span> </h4>
                </div>

                <button className='btn clear-btn' onClick={()=>dispatch(clearCart())}
                > Vaciar carrito </button>
             </footer>

     
     </Container>
     </>
   )                           
   ;
};
