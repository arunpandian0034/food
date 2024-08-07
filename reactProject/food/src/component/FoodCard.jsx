import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card } from "react-bootstrap";
import '../component/FoodCard.css';

const FoodCard = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4005/product/list");
                setCardsData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Container>
                <h1 className="text-center my-4">Food Factory</h1>
                <div className="food-card-container">
                    {cardsData.length > 0 ? (
                        cardsData.map(card => (
                            <Card key={card._id} className="food-card">
                                <Card.Img variant="top" src={`http://localhost:4005/files/uploads/${card.Image}`} alt={card.pname} />
                                <Card.Body>
                                    <Card.Title>{card.pname}</Card.Title>
                                    <Card.Text><strong>Discount: </strong>{card.desc}</Card.Text>
                                    <Card.Text><strong>Price:</strong> ${card.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p className="text-center">No products available.</p>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default FoodCard;
