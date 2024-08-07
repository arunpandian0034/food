// import React,{useEffect,useState} from "react"
// import axios from "axios"
// import { useEffect } from "react"
// import { Container } from "react-bootstrap"
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";


// const Overlay = () => {
//     const [cardsData,setCardsData] = useState([])

//     useEffect (()=>{
//         const fetchData = async ()=>{
//             await axios.get("http://localhost:4005/product/list")
//             .then (res=>setCardsData(res.data))
//             .catch(err=>console.log(err))
//         };fetchData()
//     },[])
//     return(
//         <>
//         <Container>
//             <h1 className="d-flex justify-content-center">Top Destinations</h1>
//             <div className="d-flex flex-wrap">
//                 {cardsData.map(card => (
//                     <Card key={card._id} className="bg-dark text-white m-2" style={{width:'200px',height:'200px'}}>

//                         <Card.Img src={'http://localhost:4005/Assests/${card.image}'} alt="Card image"/>

//                           <Card.ImgOverlay>
//                             <Card.Title>{card.name}</Card.Title>
//                           </Card.ImgOverlay>
//                     </Card>
//                 ))}
//             </div>
//         </Container>
//         </>
//     );
// }
// export default Overlay;


// const Overlay = () => {
//     const [cardsData, setCardsData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:4005/product/list");
//                 setCardsData(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <>
//         <Container>
//             <h1 className="d-flex justify-content-center">food factory</h1>
//             <div className="d-flex flex-wrap">
//                 {cardsData.length > 0 ? (
//                     cardsData.map(card => (
//                         <Card key={card._id} className="bg-dark text-white m-2" style={{ width: '400px', height: '300px' }}>
//                             <Card.Img src={`http://localhost:4005/files/uploads/${card.Image}`} alt={card.name} />
//                             <Card.ImgOverlay>
//                                 <Card.Title>{card.pname}</Card.Title>
//                                 <Card.Title>{card.desc}</Card.Title>
//                                 <Card.Title>{card.price}</Card.Title>
//                             </Card.ImgOverlay>
//                         </Card>
//                     ))
//                 ) : (
//                     <p className="text-white">No destinations available.</p>
//                 )}
//             </div>
//         </Container></>
//     );
// };

// export default Overlay;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Container } from "react-bootstrap";
// import '/Overlay.css'; // Import the CSS file

// const Overlay = () => {
//     const [cardsData, setCardsData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:4005/product/list");
//                 setCardsData(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <Container>
//             <h1 className="d-flex justify-content-center">Top Destinations</h1>
//             <div className="d-flex flex-wrap">
//                 {cardsData.length > 0 ? (
//                     cardsData.map(card => (
//                         <Card key={card._id} className="bg-dark text-white m-2">
//                             <Card.Img className="card-img" src={`http://localhost:4005/files/uploads/${card.Image}`} alt={card.name} />
//                             <Card.ImgOverlay className="card-img-overlay">
//                                 <Card.Title>{card.pname}</Card.Title>
//                                 <Card.Title>{card.desc}</Card.Title>
//                                 <Card.Title>{card.price}</Card.Title>
//                             </Card.ImgOverlay>
//                         </Card>
//                     ))
//                 ) : (
//                     <p className="text-white">No destinations available.</p>
//                 )}
//             </div>
//         </Container>
//     );
// };

// export default Overlay;


/* Overlay.css */

/* Container styling */
// .container {
//     padding: 20px;
//     background-color: #f8f9fa; /* Light gray background */
// }

/* Heading styling */
// .text-center {
//     text-align: center;
// }

// .mb-4 {
//     margin-bottom: 1.5rem;
// }

/* Card styling */
// .custom-card {
//     border: none;
//     border-radius: 8px;
//     overflow: hidden;
//     box-shadow: 0 4px 8px rgba(0,0,0,0.2);
//     position: relative;
//     max-width: 300px;
//     margin: auto;
// }

/* Image styling */
// .card-img {
    // object-fit: cover;
    // height: 200px; /* Fixed height */
// }

/* Card Overlay styling */
// .card-img-overlay {
//     background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
//     color: #ffffff;
//     padding: 15px;
//     border-radius: 0 0 8px 8px;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
// }

/* Card Title and Text styling */
// .card-title {
//     font-size: 1.25rem;
//     font-weight: bold;
// }

// .card-text {
//     font-size: 1rem;
// }

/* Card Footer styling */
// .card-footer {
//     background: rgba(0, 0, 0, 0.7);
//     border-top: 1px solid #ffffff;
// }

/* Responsive styling */



