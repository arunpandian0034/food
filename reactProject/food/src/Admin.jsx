import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap styles are imported

function Admin() {
    const [pname, setPname] = useState("");
    const [desc, setDesc] = useState(""); // Renamed from 'discount' to 'desc'
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!pname || !desc || !price || !image) {
            setError("Please fill all fields and upload an image.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("pname", pname);
            formData.append("desc", desc); // Ensure this matches API expectations
            formData.append("price", price);
            formData.append("image", image);

            const response = await axios.post("http://localhost:4005/product/insert", formData);
            setSuccess("Form submitted successfully");
            setError(null);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setError("Failed to submit form. Please check details.");
            setSuccess(null);
        }
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg bg-light">
                <h2 className="text-center mb-4">Add New Product</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={pname}
                        onChange={(e) => setPname(e.target.value)}
                        placeholder="Enter product name"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Discount</Form.Label>
                    <Form.Control
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Enter product Discount"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleFileChange}
                    />
                </Form.Group>
                <Button type="submit" variant="dark" className="w-100">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Admin;