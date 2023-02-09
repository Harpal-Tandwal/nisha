import React, { useState,useEffect } from 'react'
import Table from "react-bootstrap/Table"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { ADD,DLT ,REMOVE } from '../redux/actions/action';


function CardDetails() {
  const [data, setData]=useState([])
  const {id}=  useParams();
  const navigate = useNavigate()
  const getData= useSelector((state)=>state.rootReducer.cartReducer.carts)
  const dispatch = useDispatch()
  const send=(e)=>{dispatch(ADD(e))}
  const dlt= (id)=>{  dispatch(DLT(id)); navigate('/')}
  const remove=(e) =>{dispatch(REMOVE(e))}

  const compare =()=>{ let compareData = getData.filter((element)=>{return element.id ==id;});
                       setData((prevData)=> prevData=compareData)
                     }
 
  useEffect(()=>{ compare() },[id])

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails d-flex justify-content-between">
        {
          data.map((element)=>{
          const {rname,price,imgdata,rating,somedata,address,qnty,id}=element;
          return (
            <>
            <div className='Items_img'>
          <img src={imgdata} style={{ height:280}}/>
        </div>
        <div className='details'>
        <Table>
          <tbody>
            <tr>
            <td>
              <p><strong>Restaurant </strong> : {rname}</p>
              <p><strong>price </strong> : ₹ {price}</p>
              <p><strong>Dishes </strong> : {address}</p>
              <p><strong>Total </strong> : ₹ {price*qnty}</p>
                <div className="mt-5 d-flex justify-content-between align-items-center " style={{width :100, cursor:"pointer", background:"#ddd", color:"#111"}}>
                    <span style={{fontSize:24}}onClick={qnty <=1 ? ()=>dlt(id) :()=>{remove(element)}}>- </span>
                    <span style={{fontSize:22}}>{qnty} </span>
                    <span style={{fontSize:24}} onClick={()=>{send(element)}}>+ </span>
                    

                </div>       
            </td>
            <td>
            <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >{somedata}	</span></p>
                    <p onClick={()=>{dlt(id)}}><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>    
            </td>
            </tr>
          </tbody>
        </Table>

        </div>
            </>
          )
          })
        }
       </div>

       </section>
      </div>
    </>
  )
}

export default CardDetails