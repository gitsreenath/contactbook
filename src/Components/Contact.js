import React from 'react'

const Contact = ({allcntct:{Name,Phone,Email,id,fav},favtoggle,dltcntct}) => {
  return (
    <>
    <div className="col-md-3 col-lg-3 col-sm-3  " >

<div className="cnt-box border p-3 shadow  rounded">

<div className='d-flex justify-content-between'>
    <div className='text-uppercase' ><h5>{Name}</h5></div>
     <div> <span><i class="fa-solid fa-pen-to-square"></i></span>        <span onClick={()=>{favtoggle(id)

     }}>{fav ? <i className="fa-solid fa-star"></i>: <i className="fa-regular fa-star"></i>}</span> <span onClick={()=>{
        dltcntct(id)
     }}><i className="fa-solid fa-trash"></i></span>        </div>
    
</div>
<div>{Phone}</div>
<div>{Email}</div>
</div>
    </div>
    
    </>
  )
}

export default Contact