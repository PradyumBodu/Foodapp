import { createContext, useEffect, useState } from "react";
import {food_list} from '../../assets/frontend_assets/assets'


export const foodContext = createContext();

const FoodContextProvider = ({children}) => {


    const [cart,setCart] = useState({})

    const addCart = (itemId) => {
        if(!cart[itemId]){
            setCart((prev)=>({...prev,[itemId]:1}));
        }else{
            setCart((prev)=>({...prev,[itemId]: prev[itemId] + 1 }));
            
            
        }
    }

    const removeCart = (itemId) => {
        setCart((prev) => ({...prev,[itemId]: prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cart){
            if(cart[item] > 0){
                const amountInfo = food_list.find((product)=>product._id===item);
                totalAmount += amountInfo.price * cart[item];
            }
        }
        return totalAmount;
        
    }
    
    const contextValue = {
        food_list,
        cart,
        setCart,
        addCart,
        removeCart,
        getTotalCartAmount
    } 

    useEffect(()=>{
        console.log(cart);
        
    },[cart])

    return(
        <foodContext.Provider value={contextValue} >
            {children}
        </foodContext.Provider>
    )
}

export default FoodContextProvider;