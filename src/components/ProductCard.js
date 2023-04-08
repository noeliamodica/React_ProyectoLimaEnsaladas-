import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'


export function ProductCard({cartItems} ) {


const navigate = useNavigate();

function handleClick(e) {
    e.preventDefault();
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


