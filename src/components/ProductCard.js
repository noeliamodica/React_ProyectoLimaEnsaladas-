import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ProductCard({data} ) {

  

  return (
   <div className='container d-flex justify-content-center' >
         <div className='row ' >
         <div className='col-md-2' >
            <Card variant="top" style={{ width: '37rem' }} className='col-md-4'>
            <Card.Img variant="top" src={data.imagen}  />
             <Card.Body >
            < Card.Title>{data.nombre} </Card.Title>
            <Card.Text>
            {data.ingredientes}
            </Card.Text>
            <Card.Text>
          {`$ ${data.precio}`}
            </Card.Text>
            <Button   variant="secondary">Agregar al carrito</Button>
            </Card.Body>
      </Card>
    </div>
    </div>
    </div>
  );
}


