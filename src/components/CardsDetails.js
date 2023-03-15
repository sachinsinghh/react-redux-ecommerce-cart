import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import Navbar from "react-bootstrap/Navbar";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CardsDetails = () => {
  const [data, setData] = useState([]);
 
  const {id} = useParams();

  const getData = useSelector((state) => state.cartreducers.carts);
  
  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id
    });
    setData(compareData);
  }

  useEffect(()=>{
    compare();
  },[id]);




  return (
    <div className='container'>
      <h2 className='d-flex justify-content-center mt-2'>Items Detail Page</h2>

      <section className='container mt-3'>
        {data.map((data)=>{
          return  <>
          <div className='itemsDetails'>
         <div className='items_img'>
           <img src={data.imgdata} alt=''/>
         </div>
         <div className='details'>
     <Table>
     
             <tr>
               <td>
                 <p> <strong>Restaurant</strong>  : {data.rname}</p>
                 <p> <strong>Price</strong>  : ₹ {data.price}</p>
                 <p> <strong>Dishes</strong>  : {data.address}</p>
                 <p> <strong>Total</strong>  :₹  45</p>
                 <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
               

                 </div>

               </td>
               <td>
                 <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>4 ★	</span></p>
                 <p><strong>Order Review :</strong> <span >review	</span></p>
                 <p><strong>Remove :</strong> <span ><i className='fas fa-trash' ></i>	</span></p>
               </td>
             </tr>
           </Table>
     </div>
     </div>
       </>
        } )}
         
         
        
       

      
      </section>
    </div>
  )
}

export default CardsDetails