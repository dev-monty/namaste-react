import { useDispatch, useSelector } from "react-redux";
import { clearCart,removeItems } from "../utils/cartSlice";

const Cart = ()=>{

 
    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    const handleRemoveItems = (item)=>{
        dispatch(removeItems(item))
    }

    const cartItems = useSelector((store)=>store.cart.items);

    return cartItems.length === 0 ? <h1 className="font-bold flex text-lg mt-14 justify-center">Your basket is empty!</h1> : (
        <div className="">
            <div className="flex justify-center m-4">
            <h1 className="font-bold underline text-xl ">Cart</h1>
            </div>
            <div className="flex justify-center m-4">
            <button onClick={handleClearCart} className="bg-[#fd771e] text-white px-[15px] py-[2px] rounded-[50px] font-bold">Clear Cart</button>
            </div>
            <div className="w-6/12 m-auto">
      
           {cartItems.map((item)=>(
                <div key={item?.card?.info?.id}  style={{
                    borderBottom: "1px dashed #d3d3d3",
                    paddingBottom: "10px",
                  }} className="flex justify-between">
                 <div className="w-11/12">
                 <p className="font-medium">{item?.card?.info?.name} <br/> ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100} </p>
                 <span className="text-[#686b78] text-xs">{item?.card?.info?.description}</span>
                    </div>
                    <div className="w-1/12">   
                    <button className="absolute bg-black text-white rounded-md p-[6px] text-xs ml-6 mt-12" onClick={()=>handleRemoveItems(item)}>Remove - </button>
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} className="w-[90px] h-[70px] rounded-md object-cover"/>
                        </div>
                </div>
            ))}
          
            </div>
        </div>
    )
}

export default Cart;