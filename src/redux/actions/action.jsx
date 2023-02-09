const ADD_CART="ADD_CART"

const ADD=(item)=>{
    return{
        type:ADD_CART,
        payload:item
    }
}
const RMV_CART="RMV_CART"
const DLT=(id)=>{
    return{
        type:RMV_CART,
        payload:id
    }}

const RMV_ONE="RMV_ONE"
const REMOVE=(item)=>{
    return{
        type:RMV_ONE,
        payload:item
    }
}

export {ADD,DLT,REMOVE}