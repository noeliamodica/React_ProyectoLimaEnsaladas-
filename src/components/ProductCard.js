import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ProductCard({data} ) {

  

  return (
   <div className='container d-flex justify-content-center' >
         <div className='row ' >
         <div className='col-md-2' >
            <Card variant="top" style={{ width: '37rem' }} className='col-md-4'>
            <Card.Img variant="top" src={data.image}  />
             <Card.Body >
            < Card.Title>{data.name} </Card.Title>
            <Card.Text>
            {data.base}
            </Card.Text>
            <Card.Text>
          {`$ ${data.price}`}
            </Card.Text>
            <Button   variant="secondary">Agregar al carrito</Button>
            </Card.Body>
      </Card>
    </div>
    </div>
    </div>
  );
}


