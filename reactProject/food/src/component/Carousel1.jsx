// import Carousel from 'react-bootstrap/Carousel';
// function Carousel1() {
//   return (
//     <>
//       <div className='container-fluid'>
//       <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./images/banner9.jpg"    
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h1 >Delicious food</h1>
//           <p>Food quality is an important factor in the success of a food product.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       {/* <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./images/design-3.webp"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./images/design-6.jpg"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item> */}
//     </Carousel>
//     </div>
//     </>
//   )
// }


// export default Carousel1;
import Carousel from 'react-bootstrap/Carousel';

function Carousel1() {
  return (
    <div className='container-fluid'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/banner9.jpg"
            alt="Delicious food"
          />
          <Carousel.Caption>
            <h1>Delicious Food</h1>
            {/* <p>Food quality is an important factor in the success of a food product.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/* Uncomment and update if needed */}
        {/* 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/design-3.webp"
            alt="Design slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/design-6.jpg"
            alt="Another design slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        */}
      </Carousel>
    </div>
  );
}

export default Carousel1;
 