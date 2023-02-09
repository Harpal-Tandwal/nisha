import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mui/material';

import { DLT } from '../redux/actions/action';
function Header() {
  const [price, setPrice]=useState(0);
  const getData= useSelector((state)=>state.rootReducer.cartReducer.carts)
 
  const dispatch = useDispatch()
  const dlt= (id)=>dispatch(DLT(id))

  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {setAnchorEl(event.currentTarget);  };
  const handleClose = () => {setAnchorEl(null)};

  
  const total=()=>{
    let price = 0;
    getData.map((item)=>{price += item.price* item.qnty })
    setPrice(price)
  }
  useEffect(()=>{total()}, [total])


  return (
    
   <>
   <Navbar bg="dark" variant="dark" style={{height:60}}>
        <Container>
          <NavLink to="/" className={"text-decoration-none text-light mx-3"}>Add to cart</NavLink >
          <Nav className="me-auto">
          <NavLink to="/" className={"text-decoration-none text-light"}>Home</NavLink >

       
          </Nav> 
          
          <Badge badgeContent={getData.length} color="primary"
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
          <i className="fa-sharp fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:"pointer"}}></i>
          </Badge>

        </Container>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
      
      {
        getData.length?
        <div className='card_details' style={{width:"24rem", padding:10}}>
        <Table>
          <thead>
            <tr> <th>Photos</th> <th> Restaurant Name</th></tr>
                
          </thead>
          <tbody>
            {getData.map((element)=>{
              const {imgdata,qnty, rname,price,id}=element;
              return(<>
              <tr> 
               <td> 
               <NavLink to={`/cart/${id}`} >
               <img src={imgdata} style={{width:"5rem", height:"5rem"}}/>
               </NavLink>  
               </td>
               <td>
                <p> {rname} </p>
                <p> price: ₹ {price} </p>
                <p> quantity:{qnty}</p>
              <p style={{color:"red", cursor:"pointer"}}  onClick={()=>{dlt(id)}}>
                <i className='fas fa-trash smalltrash'></i>
              </p>
               </td>
               <td className='mt-5'  style={{color:"red", cursor:"pointer"}}  onClick={()=>{dlt(id)}}>
                <i className='fas fa-trash largetrash'></i>
              </td>
              </tr>

              </>)
            })
            }
            <p className='text-center'> total: ₹{price}</p>
          </tbody>
        </Table>

        </div>:
        <div className='card_details d-flex justify-conten-center align-item-center '
     style={{width:"24rem"}}  >
     <i 
      className='fas fa-close smallclose' 
      style={{position:"absolute",
       top:2,
       right:20,
       fontSize:23 ,
       cursor:"pointer"}}
       onClick={handleClose}

      ></i>
<p style={{fontSize:22}}> your cart is empty </p>
     </div>


      }
    
      </Menu>
      </Navbar>
   </>
  )
}

export default Header