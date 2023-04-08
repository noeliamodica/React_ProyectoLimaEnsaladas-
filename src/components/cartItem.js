import { ChevronDown, ChevronUp } from '../icons'
import { removeItem, increase, decrease } from '../reducers/cart/cartSlice'
import { useDispatch } from 'react-redux'
import {Row, Col, Image, ListGroup, Button, Card, Form, Container }  from 'react-bootstrap';

const CartItem = ({id, image, name, price, amount, status, countInStock}) =>{

    const dispatch = useDispatch()

    function handleOnClick () {
        dispatch(removeItem(id));
    }
  
   
    return (
        <Col md={6} >
        <Card>
            <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                        <Col md={4} >
                           <Image src={image}  alt={name} fluid />
                        </Col>
                            <Col> Price: 
                            
                                <strong> ${price} </strong>
                            </Col>

                            <Col> Status:  </Col>
                            <Col> 
                                {status === "Mas Vendido" ? 'Mas Vendido' : "En Stock"}
                            </Col>
                                                    </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    
                           
                        
                            <Col> Cantidad:  </Col>
                            <Col> 
                                {amount}
                            </Col>
                            
                    

                    </ListGroup.Item>

            </ListGroup>
           
            <ListGroup.Item>
                <Button 
                    onClick={handleOnClick}
                    className='btn-block' 
                    disabled={countInStock === 0} 
                    type='button'
                        > 
                        Eliminar del carrito
                </Button>
            <ListGroup.Item>    
                <Button 
                    onClick={()=>{
                        dispatch(increase({id}))
                    }}
                    className='btn-block'  
                    type='button'
                        > 
                        Agregar un producto
                        
                </Button>
            </ListGroup.Item>
            <ListGroup.Item>    
                <Button 
                    onClick={()=>{
                        if (amount === 1){
                            dispatch(removeItem(id));
                            return;
                        }
                        dispatch(decrease({id}))
                    }}
                    className='btn-block'  
                    type='button'
                        > 
                        Eliminar un producto
                        
                </Button>
            </ListGroup.Item>
            </ListGroup.Item>

            </Card>
            </Col>
        
    )
}
export default CartItem