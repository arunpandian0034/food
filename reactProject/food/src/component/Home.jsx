
// import CardsNew from "./CardsNew";



// import Card from "./Card";
// import data from './viewCard.json'
// import { useEffect, useState } from "react"
// // import Card from "./card";
// import CardOne from "./CardOne";
// import axios from 'axios'
// import Pic from "./Pic";
// import  Overlay  from "./Overlay";

import Service from "./Service";
import Carousel1 from "./Carousel1";

import FoodCard from './FoodCard'
import Footer from './Footer'
import Navbar1 from "./Navbar1";
import Carousel2 from "./Carousel2";
import Pasta from "./Pasta";




//     const [carddata] = useState(data)

//     const [datas,setDatas] = useState([])
// useEffect(() =>{
//     const feachdata= async()=>{  
//     await axios.get('http://localhost:4005/product/list')
//     .then(res =>setDatas(res.data))
//      .catch(err =>console.log(err))
//      console.log(datas)
   

// }
//    feachdata()
// },[])

//     return(
//     <>
    // 
//     {/* <section class="home">
//         <div class="content">
//             <div classs="para-content">
//                 <h1>Enjoy Our<br></br>
//                 Delicious meal</h1>
//             </div>
//             <button class="content-btn">BOOK A TABLE</button>
// </div>
// <div class="content-image">
//     <img src="./images/about.jpg" alt="" />
// </div>
//     </section> */}
//     {/* <CardsNew/><br></br><br></br> */}
//     <Service/>
//     {/* <Pic/> */}
//     <div className="cards1">
    
//     {  carddata.slice(0,16).map((vc) =>(
//            <Card key={vc.id} vc={vc}/>
//     ))}
//     </div>
//     <div className="cards2">
//     {  carddata.slice(16,18).map((vc) =>(
//            <CardOne key={vc.id} vc={vc}/>
//     ))}
//     </div>
//     {/* <div className="cards3">
//     {  carddata.slice(8,16).map((vc) =>(
//            <Card key={vc.id} vc={vc}/>
//     ))}
//     </div> */}
//     {/* <CardOne/> */}
//       <div>
//        {datas.map((x1) =>(
//         <div className="main1" key={x1._id}>
//             <h1>{x1.name}</h1>

//         </div>
//        ))}
//       </div>

    function Home(){

      return(
      <>
      <Navbar1/>
      {/* <Navbar/> */}
       <Carousel1/>
      
       {/* <Navbar/> */}
       {/* <Overlay/> */}
       <Service/>
       <Pasta/>
       <FoodCard/>
       <Carousel2/>
       
       
       <Footer/>
     
    </>
    )
}
export default Home;