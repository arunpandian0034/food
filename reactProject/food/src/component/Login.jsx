import Nav from 'react-bootstrap/Nav';
import Navbar1 from './Navbar1';
import { Link } from 'react-router-dom';
export function Login(){
    const LoginUser = (e)=>{
        e.preventDefault()
        const user = {
            username :e.target.username.value,
            password:e.target.password.value
        }
        if (user){
            fetch("http://localhost:4000/user/login",{
                method :"post",
                headers:{
                    "accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify
            }
        )
        .then(res => res.jsan())
        .then((data)=>{
            if(data.userFound){
                alert("success")
            }
            else{
                alert("failed")
            }
        })
        } else{
            alert("password dosen't match")

        }
    }
    return(
        <div className="maincontainerone">
             <div className="containsone">

        <div className="Login">
            <form method="post" onSubmit={(e)=>{LoginUser(e)}}>
            <div className="heading">
                    <h1>login form</h1>
                </div>
                
                <div className="username">

                 <input type = "text" name="username" placeholder="username"></input><br></br>   
                </div>
                <div className="password">
                <input type = "text" name="password" placeholder="password"></input><br></br>

                </div>
                <div className="submit">
                <input type = "submit" value="Login"></input>
                <button className='btn'>
                    <Link to="/Signup">Signup</Link>
                </button>
              </div>
               </form>
        </div>
        </div>
        </div>
    )
}
export default Login ;