import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProductCard } from './ProductCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Products.css';
import { useEffect, useState } from 'react';

export const Products = () => {
   const [productsAll, setProductsAll] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3007/products')
         .then((response) => response.json())
         .then((data) => setProductsAll(data));
   }, []);

   console.log(productsAll);

   return (
      <section className="project" id="project">
         <Container>
            <Row>
               <Col size={12}>
                  <TrackVisibility>
                     {({ isVisible }) => (
                        <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                           <h2>Nuestras Ensaladas</h2>
                           <p>
                              Nuestro restaurante ofrece ensaladas de primera calidad elaboradas con ingredientes
                              frescos y naturales. Las ensaladas son saludables, ricas y sabrosas, y se preparan con
                              productos locales para asegurar el mejor sabor y frescura. Nuestras ensaladas están llenas
                              de ingredientes nutritivos como verduras de temporada, frutas, semillas, nueces y hierbas
                              frescas. Ofrecemos una variedad de ensaladas para satisfacer todos los gustos, desde
                              ensaladas clásicas hasta ensaladas exóticas con sabores únicos. Estamos comprometidos con
                              la calidad y el sabor, por lo que en nuestro restaurante solo usamos ingredientes
                              naturales y frescos para ofrecer el mejor producto. ¡Ven a probar nuestras ensaladas de
                              calidad premium y disfruta de la mejor frescura y sabor!
                           </p>
                           <Tab.Container id="projects-tabs" defaultActiveKey="first">
                              <Nav
                                 variant="pills"
                                 className="nav-pills mb-5 justify-content-center align-items-center"
                                 id="pills-tab"
                              >
                                 <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                              <Tab.Content
                                 id="slideInUp"
                                 className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                              >
                                 <Tab.Pane eventKey="first">
                                    <Row>
                                       {productsAll.map((project, index) => {
                                          return <ProductCard key={index} {...project} />;
                                       })}
                                    </Row>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="section">
                                    <p>
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque
                                       provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi
                                       dicta officiis asperiores delectus quasi inventore debitis quo.
                                    </p>
                                 </Tab.Pane>
                                 <Tab.Pane eventKey="third">
                                    <p>
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque
                                       provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi
                                       dicta officiis asperiores delectus quasi inventore debitis quo.
                                    </p>
                                 </Tab.Pane>
                              </Tab.Content>
                           </Tab.Container>
                        </div>
                     )}
                  </TrackVisibility>
               </Col>
            </Row>
         </Container>
         {/* <img className="background-image-right" src={colorSharp2}></img> */}
      </section>
   );
};
