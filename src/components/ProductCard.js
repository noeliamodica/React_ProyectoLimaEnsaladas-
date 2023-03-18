import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ProductCard({data, allProducts, setAllProducts} ) {

   const onAddProduct = () => {
		console.log('add')
	};
  return (
   <div className='container d-flex justify-content-center' >
         <div className='row ' >
         <div className='col-md-2' >
            <Card variant="top" style={{ width: '43rem' }} className='col-md-4'>
            <Card.Img variant="top" src={data.imagen}  />
             <Card.Body >
            < Card.Title>{data.nombre} </Card.Title>
            <Card.Text>
            {data.ingredientes}
            </Card.Text>
            <Card.Text>
          {`$ ${data.precio}`}
            </Card.Text>
            <Button  pnClick={() => onAddProduct()} variant="secondary">Agregar al carrito</Button>
            </Card.Body>
      </Card>
    </div>
    </div>
    </div>
  );
}


