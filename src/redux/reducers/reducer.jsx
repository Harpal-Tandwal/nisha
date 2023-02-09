const INIT_STATE= {
    carts:[]
};
const cartReducer=(state= INIT_STATE, action)=>{
    const {type,payload}=action;
    switch(type){
        case "ADD_CART" :
         const ItemIndex = state.carts.findIndex((item)=>item.id==action.payload.id);
         if(ItemIndex>=0){state.carts[ItemIndex].qnty += 1}
         else {
            const temp = {...action.payload,qnty:1}
            return { ...state,  carts:[...state.carts, temp] }
           }
        
       
        case "RMV_CART" :
              const data= state.carts.filter((item)=>{return item.id !=action.payload})
              return {...state, carts:data}

        case "RMV_ONE":
            const ItemIndex_dec = state.carts.findIndex((item)=>{return item.id == action.payload.id});
        
             if(state.carts[ItemIndex_dec].qnty >=1){
                 state.carts[ItemIndex_dec].qnty -= 1
                 return {...state,carts:[...state.carts]}}
          else if(state.carts[ItemIndex_dec].qnty ==1){
            const data= state.carts.filter((item)=>{return item.id !=action.payload})
              return {...state, carts:data}
          }
        default : return state;
    }
}

export default cartReducer;