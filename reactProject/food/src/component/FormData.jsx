// import axios from "axios";
// import { useState } from "react";

// function FormData() {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [phonenumber, setPhonenumber] = useState("");
//     const [password, setPassword] = useState("");

//     const [cpassword, setCpassword] = useState("");
//     const [errors, setErrors] = useState({});

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         let newErrors = {};
//         if (!username) {
//             newErrors.username = "Username is  required";
//         } else if (Number(username)) {
//             newErrors.username = "Enter at alphapet"
//         }
//         if (!email) {
//             newErrors.email = "email is required"
//         }
//         if (!phonenumber) {
//             newErrors.phonenumber = "phonenumber is required"
//         }
//         else if (!Number(phonenumber)) {
//             newErrors.phonenumber = "enter correct phonenumber"
//         }
//         else if (phonenumber.length !== 10) {
//             newErrors.phonenumber = "Enter the 10 digit number"
//         }
//         if (!password) {
//             newErrors.password = "Password is required"
//         }
//         if (!cpassword) {
//             newErrors.cpassword = "Confirm Password is required"
//         }
//         if (password !== cpassword) {
//             newErrors.cpassword = "Passwords do not match"
//         }
//         console.log("username" + username, "password" + password, email, phonenumber, password, cpassword)
//         setErrors(newErrors);

//     }
//     if (password == cpassword && (!Number(username)) && (Number(phonenumber)) && phonenumber.length == 10) {
//         try {
//             const response = await axios.post("http://localhost:4005/user/insert", {
//                 username, email, phonenumber, password
//             });
//             console.log(response.data)
//             alert("form sumit sucessful")
//         }
//         catch (error) {
//             console.log(error)
//             alert("failed to submit form.please check details.");
//         }
//     }





//     return (
//         <div className="d-flex justify-content-center align-item-center bc ">
//             <div className="mt-3 boc" style={{ borderRadius: "30px", width: "500px", border: "2px solid #dadada", display: "flex", justifyContent: "center", alignItems: "center", height: "700px" }}>

//                 <h1>signin</h1>


//                 <form onSubmit={handleSubmit}>

//                     <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.username ? "1px solid red" : "none" }} ></input>
//                     {<div style={{ color: "red", fontSize: "14px" }}>{errors.email}</div>}
//                     <br></br>


//                     <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.lemail ? "1px solid red" : "none" }} ></input>
//                     {<div style={{ color: "red", fontSize: "14px" }}>{errors.email}</div>}
//                     <br></br>

//                     <input type="contact" name="phonenumber" onChange={(e) => setPhonenumber(e.target.value)} placeholder="phonenumber" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.lemail ? "1px solid red" : "none" }} ></input>
//                     {<div style={{ color: "red", fontSize: "14px" }}>{errors.email}</div>}
//                     <br></br>

//                     <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="setPassword" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.lemail ? "1px solid red" : "none" }} ></input>
//                     {<div style={{ color: "red", fontSize: "14px" }}>{errors.email}</div>}
//                     <br></br>

//                     <input type="password" name="cpassword" onChange={(e) => setCpassword(e.target.value)} placeholder="setCpassword" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "start", padding: "20px", border: errors.lemail ? "1px solid red" : "none" }} ></input>
//                     {<div style={{ color: "red", fontSize: "14px" }}>{errors.email}</div>}
//                     <br></br>

//                     <button type="submit" style={{ borderRadius: "30px", width: "300px", height: "35px", textAlign: "center", backgroundColor: "white", color: "black", border: "none" }} >create</button>

//                 </form>

//             </div>
//         </div>

//     );

// }

// export default FormData;


import axios from "axios";
import { useState } from "react";
import './FormData.css'; // Import the CSS file

function FormData() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:4005/user/insert", {
                username, email, phonenumber, password
            });
            console.log(response.data);
            alert("Form submission successful");

            // Reset form fields
            setUsername("");
            setEmail("");
            setPhonenumber("");
            setPassword("");
            setCpassword("");
        } catch (error) {
            console.log(error);
            alert("Failed to submit form. Please check details.");
        }
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" 
                        className={`form-input ${errors.username ? "error" : ""}`} 
                    />
                    <div className="error-message">{errors.username}</div>
                    
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        className={`form-input ${errors.email ? "error" : ""}`} 
                    />
                    <div className="error-message">{errors.email}</div>
                    
                    <input 
                        type="tel" 
                        name="phonenumber" 
                        value={phonenumber} 
                        onChange={(e) => setPhonenumber(e.target.value)} 
                        placeholder="Phone Number" 
                        className={`form-input ${errors.phonenumber ? "error" : ""}`} 
                    />
                    <div className="error-message">{errors.phonenumber}</div>
                    
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        className={`form-input ${errors.password ? "error" : ""}`} 
                    />
                    <div className="error-message">{errors.password}</div>
                    
                    <input 
                        type="password" 
                        name="cpassword" 
                        value={cpassword} 
                        onChange={(e) => setCpassword(e.target.value)} 
                        placeholder="Confirm Password" 
                        className={`form-input ${errors.cpassword ? "error" : ""}`} 
                    />
                    <div className="error-message">{errors.cpassword}</div>
                    
                    <button type="submit" className="submit-button">Create</button>
                </form>
            </div>
        </div>
    );
}

export default FormData;

