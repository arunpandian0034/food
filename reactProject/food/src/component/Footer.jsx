// import Footer from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer(){
    return(
        <>
        {/* <div className="container">
        <div class="footer">
        <div class="container">
            <div class="footer-box-1">
                <h2 class="headingtext">fashion</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, nulla.</p>
                <div class="footer-icon-container">
                    <i class="fa-brands fa-instagram" style="color:#ffffff"></i>
                    <i class="fa-brands fa-twitter" style="color:#ffffff"></i>
                    <i class="fa-brands fa-facebook" style="color:#ffffff"></i>

                </div>

            </div>

        </div>
<p>@ 2024 fashion.com</p>
    </div>
        </div> */}
     
        <div className="containers">
            <div className="footer">
        <h2 class="headingtext">food</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, nulla Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iure necessitatibus harum est vero. Voluptatum corporis voluptatem iure ullam consectetur, asperiores itaque magnam perferendis laborum quod, earum rerum est expedita fugit iste vitae facere, magni provident illo odit? Provident porro assumenda ratione facere quo laborum maxime ipsam consequuntur ipsa mollitia..</p>
        <h5> find our restaurants</h5>
        <h6>3/34 p.t.rajan road maduai 625002</h6>
        <h6>7/14 theni main road maduai 625010</h6>
        <h5> working hours</h5>
        <h6>monday to friday 9.00-22.00</h6>
        <h6>saturday-sunday 12.00-24.00</h6>
        <FaFacebook />
        <FaSquareInstagram />

        </div>
   </div>
        
        </>
    )
}
export default Footer;