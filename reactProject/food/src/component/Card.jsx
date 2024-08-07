import React from 'react'
// import image1 from '../../public/images/modern4.jpg'

const Card = ({vc}) => {
  return (
    <div className='card16'>
       
       <img src={"../../public/images/"+vc.img}/>
       <h4>{vc.foodname}</h4>
       <h5>{vc.price}</h5>
       <h5>{vc.rating}</h5>
       {/* <button><h4>{vc.add}</h4></button> */}
    </div>
  )
}

export default Card
