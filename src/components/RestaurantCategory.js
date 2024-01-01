import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props)=>{
     //const accordion = props.accordion;
     //const setShowIndex = props.setShowIndex;
    const[accordion,setAccordion] = useState(false)

    const handleclick = ()=>{
        //setShowIndex();
       setAccordion(!accordion)
    }


    return(
        <div className="bg-gray-100 shadow-lg mt-4">
            <div className="bg-gray-100 flex text-center justify-between w-full p-2 shadow-lg cursor-pointer" onClick={handleclick}>
            <span className="font-bold uppercase text-sm">{props.data.title} ({props.data.itemCards.length})</span>
        <span>&#11015;</span>
            </div>
            <div>
              {accordion === true ? <ItemList data={props}/> :<></> }  
            </div>
       
        </div>
    )
}

export default RestaurantCategory;