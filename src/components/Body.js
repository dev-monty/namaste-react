import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body = ()=>{

  let listOfRest = [
    {
      data: {
        type: "F",
        id: "334475",
        name: "KFC",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        avgRating: "4.4",
      }
    },
    {
      data: {
        type: "F",
        id: "334476",
        name: "MacD",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        avgRating: "3.5",
      }
    }
   ]

   const [listOfRestaurent,setListOfRestaurent] = useState(resList)


    return(
    
      <div className="body">
         
        <div className="search" style={{marginBottom:"20px"}}>
         {/* <input type="text" placeholder=" Search...!" /> */}
         <button className="filter-btn" onClick={()=>{
         const filteredRes = listOfRestaurent.filter((res)=>res.data.avgRating > 4)
         setListOfRestaurent(filteredRes);
          }}>Top rated restaurants</button>

          <button className="filter-btn" onClick={()=>{setListOfRestaurent(resList)}}>Clear</button>
        </div>
         <div className="rest-container">
   
   {listOfRestaurent.map((res,index)=>{
      return(
        <RestaurantCard resData={res} key={index}/>
      )
    })
  
   }
  
         </div>
      </div>
    )
  }

  export default Body;