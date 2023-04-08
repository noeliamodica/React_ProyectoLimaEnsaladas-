import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

export function ProductCard({productos} ) {


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
            <Card.Img variant="top" src={productos.image}  />
             <Card.Body >
            < Card.Title>{productos.name} </Card.Title>
            <Card.Text>
            {productos.base}
            </Card.Text>
            <Card.Text>
          {`$ ${productos.price}`}
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


