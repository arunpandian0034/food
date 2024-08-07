
import React, { useState } from "react";
// import bcrypt from 'bcrypt'
import axios from "axios";

export const Signup =() => {

    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [confirmPassword,setconfirmpassword] = useState('');
    const [contact,setContact] = useState('');


    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(Password !== confirmPassword){
            alert("password does not match")
            return;
        }
        try{

            // const hashedPassword = await bcrypt.hash(Password,10);

            const response = await axios.post('http://localhost:4000/user/insert',{Name,Email,Number,Password})
            console.log(response);
            alert("Signed up Successfully")
            nav('/login')
        }catch(error){
            console.error(error);
            alert("sign up error")
        }
    }

    return(
        <>
        <div className="maincontainer">
        <div className="contains">
            <div className="form-main">
                <div className="heading">
                    <h1>Signup form</h1>
                </div>
                <div className="inputss">
                    <div className="us-name">
                        <input type="text"
                           required
                           placeholder="name"
                           value={Name}
                           onChange={(e)=> setName(e.target.value)}
                        />
                          <div className="us-email">
                            <input type="email"
                           required
                           placeholder="Email"
                           value={Email}
                           onChange={(e)=> setEmail(e.target.value)}
                        />
                        </div>
                        <div className="us-contact">
                            <input type="text"
                           required
                           placeholder="Contact Number"
                           value={contact}
                           onChange={(e)=> setContact(e.target.value)}
                        />
                        </div>
                        <div className="us-pword">
                            <input type="password"
                           required
                           placeholder="password"
                           value={Password}
                           onChange={(e)=> setPassword(e.target.value)}
                        />
                        </div>
                        <div className="con-pass">
                            <input type="password"
                           required
                           placeholder=" confirm password"
                           value={confirmPassword}
                           onChange={(e)=> setconfirmpassword(e.target.value)}
                        />
                        </div>
                        <div className="sign-sbmt">
                            <input type="submit"/>
                        </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default  Signup;