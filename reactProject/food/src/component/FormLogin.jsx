import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FormLogin.css"; // Import the CSS file

function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit2 = async (event) => {
        event.preventDefault();
        let newErrors = {};
        if (!email) {
            newErrors.email = "Email is required";
        }
        if (!password) {
            newErrors.password = "Password is required";
        }
        setErrors(newErrors);
        if (email && password) {
            try {
                const response = await axios.post("http://localhost:4005/user/login", {
                    email, password
                });
                console.log(response.data);
                if (response.data.userFound) {
                    alert("Login successful");
                    window.location.href = '/Home';
                } else {
                    alert("Login failed");
                }
            } catch (error) {
                console.error("Error logging in:", error);
                alert("Login failed.");
            }
        }
    };

    return (
        <div className="form-container">
            <div className="form-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit2}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Username" 
                        onChange={(e) => setEmail(e.target.value)} 
                        className={errors.email ? "input-error" : "input"} 
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}

                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        className={errors.password ? "input-error" : "input"} 
                    />
                    {errors.password && <div className="error-message">{errors.password}</div>}

                    <p>Don't have an account? <Link to="/data">Sign up</Link></p>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;
