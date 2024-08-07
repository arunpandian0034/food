import React from 'react'
// import image1 from '../../public/images/modern4.jpg'

const CardOne = ({vc}) => {
  return (
    <div className='card4'>
       
       <img src={"../../public/images/"+vc.img}/> 
       <h4>{vc.foodname}</h4>
       <h5>{vc.price}</h5>
       {/* <button><h4>{vc.add}</h4></button> */}
    </div>
  )
}

export default CardOne;