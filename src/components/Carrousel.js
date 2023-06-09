
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carrousel.css';


export const Carrousel = () => {
   const responsive = {
      superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 4000, min: 3000 },
         items: 5,
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
      },
   };
   return (
      <section className="skill" id="skills">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                     <h2>Las Populares</h2>
                     <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                        <img src={"/img/Caesar.jpg"} alt='Image'/>
                           <h5>Ensalada Caesar</h5>
                        </div>
                        <div className="item">
                           <img src={"/img/Clásica.jpg"} alt="Image" />
                           <h5>Ensalada Clásica</h5>
                        </div>
                        <div className="item">
                           <img src={"/img/Cala.jpg"} alt="Image" />
                           <h5>Ensalada Cala</h5>
                        </div>
                        <div className="item">
                           <img src={"/img/Crispy.jpg"} alt="Image" />
                           <h5>Ensalada Crispy</h5>
                        </div>
                     </Carousel>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
