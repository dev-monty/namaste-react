// import { CDN_IMG } from "../utils/constant";

import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = (props)=>{
    const items = props.data.data.itemCards;

    const dispatch = useDispatch();
 const handleAddItems=(item)=>{
    dispatch(addItems(item));
    alert(item?.card?.info?.name + " " +"added to cart");
 }

    //console.log("Item" ,items );
    return(
        <div className="p-2">
            {items.map((item)=>(
                <div key={item?.card?.info?.id}  style={{
                    borderBottom: "1px dashed #d3d3d3",
                    paddingBottom: "10px",
                  }} className="flex justify-between">
                 <div className="w-11/12">
                 <p className="font-medium">{item?.card?.info?.name} <br/> ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100} </p>
                 <span className="text-[#686b78] text-xs">{item?.card?.info?.description}</span>
                    </div>
                    <div className="w-1/12">   
                    <button className="absolute bg-black text-white rounded-md p-[6px] text-xs ml-6 mt-12" onClick={()=>handleAddItems(item)}>Add +</button>
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} className="w-[90px] h-[70px] rounded-md object-cover"/>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;