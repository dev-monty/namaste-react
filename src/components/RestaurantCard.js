import {CDN_IMG} from "../utils/constant"

const RestaurantCard = (props)=>{
     //console.log(props);
    
    return(
      <div className="m-4 p-4 w-[200px] bg-[#f2f2f2] shadow-sm h-[250px] hover:shadow-lg hover:bg-[#d5d5d5]">
     
      <img src={
       CDN_IMG + props?.resData?.info?.cloudinaryImageId} className="w-48 h-[7rem] rounded-[4px]"/>
       <h3>{props?.resData?.info?.name} | { props?.resData?.info?.avgRating}</h3>
      <h4>{props?.resData?.info?.cuisines.join(", ")}</h4> 
  </div>
     )
  }


   export const withPromottedlabel = (RestaurantCard)=>{
      return (props)=>{
         return(
            <div>
               <label className="absolute bg-green-800 text-white text-xs m-2 p-[4px] rounded-[4px]">Pure Veg</label>
               <RestaurantCard {...props}/>
            </div>
         )
      }
   }


  export default RestaurantCard;