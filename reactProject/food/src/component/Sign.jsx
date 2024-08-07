import { Link, NavLink } from "react-router-dom";


export function Sign(){

    const registerUser = (e)=>{
        e.preventDefault()
        const user = {
            username:e.target.username.value,
            email:e.target.email.value,
            contact:e.target.contact.value,
            password:e.target.password.value,
            confirmpassword:e.target.confirmpassword.value
        }
        if(e.target.password.value === e.target.confirmpassword.value){
            fetch("http://localhost:4005/user/insert",{
                method :"post",
                headers:{
                    "accept":"application/json",
                    "content-Type":"application/json"
                },
                body:JSON.stringify(user)
            }
        )
        .then(res => res.json())
        .then((date)=>{
            console.log(data);
        })
        .then(alert("Signup successfull"))
        } else{
            alert("password dosen't match")
        }
    
    }
    return(

        <div className="sign">
            <form method="post" onSubmit={(e)=>{registerUser(e)}}>
        <div className="username">
            <input type="text" name="username" placeholder="username"></input><br></br></div>
        <div className="email">
            <input type="text" name="email" placeholder="E-mailTd"></input><br></br></div>
        <div className="contact">
            <input type="text" name="contact" placeholder="phonenumber"></input><br></br></div>
        <div className="password">
            <input type="password" name="password" placeholder="password"></input><br></br></div>
        <div className="confirmpassword">
            <input type="password" name="confirmPassword" placeholder="Confirm password"></input><br></br></div>
        <div className="submit">
            {/* <button className="bttn">
                <Link to="/signin">Signin</Link>
            </button> */}
            <input type="submit" />
            <button className="bttn1">
            <Link to="/login">Login</Link>
            </button>

            {/* <input type="submit" value="Signup"></input>
            <input type="submit" value="Login"></input> */}
            </div> 

   </form>
        </div>

    )
}
export default Sign ;
