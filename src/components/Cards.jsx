import React, {useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from './CardsData';
import {ADD,DLT} from './../redux/actions/action';
import { useDispatch,  } from 'react-redux';


function Cards() {

  const dispatch = useDispatch()
  const [data, setData]= useState(Cardsdata)
  const send=(e)=>{dispatch(ADD(e))}
  
  return (
    <div className='container mt-3'>
      <h1 className='text-center' style={{fontFamily:"roboto"}}>Mountain Travelling Kit</h1>
      <div className='row d-flex justify-content-center align-item-center'>
      {
        data.map((element,id)=>{
                    const {imgdata,rname,price}=element;
                    return <>
                      <Card style={{ width: '18rem' }} className="mx-2 mt-4 card_style"  key={id}>
                        <Card.Img variant="top" src={imgdata} style={{height:"16rem"}} />
                         <Card.Body>
                          <Card.Title>{rname}</Card.Title>
                          <Card.Text> price: ₹ {price} </Card.Text>
                        <div className='button_div d-flex justify-content-center'>
                            <Button 
                            variant="primary"
                             className='col-lg-12'
                            onClick={()=>{send(element)}}
                             >Add to cart</Button>
                        </div>
                      </Card.Body>

                    </Card> 
                </>
        })
      }
     
      </div>
    </div>
  )
}

export default Cards