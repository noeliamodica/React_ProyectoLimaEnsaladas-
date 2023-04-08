import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import { removeItem, increase, decrease } from '../reducers/cart/cartSlice'
import { useDispatch } from 'react-redux'

export function ProductCard({cartItems, id} ) {

const navigate = useNavigate();
const dispatch = useDispatch()


function handleClick(e) {
    e.preventDefault();
    //dispatch(increase({id}))
    navigate('/cartContainer')
  }

  return (
   <div className='container d-flex justify-content-center' >
         <div className='row ' >
         <div className='col-md-2' >
            <Card variant="top" style={{ width: '37rem' }} className='col-md-4'>
            <Card.Img variant="top" src={cartItems.image}  alt='image' />
             <Card.Body >
            < Card.Title>{cartItems.name} </Card.Title>
            <Card.Text>
            {cartItems.base}
            </Card.Text>
            <Card.Text>
              
          {`$ ${cartItems.price}`}
            </Card.Text>
            <Button   
            variant="secondary"
            onClick={handleClick}

            >Agregar al carrito</Button>
            </Card.Body>
      </Card>
    </div>
    </div>
    </div>
  );
}


