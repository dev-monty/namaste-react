import {CDN_IMG} from "../utils/constant"

const RestaurantCard = (props)=>{
     //console.log(props);
    
    return(
      <div className="res-card">
     
      <img src={
       CDN_IMG + props?.resData?.info?.cloudinaryImageId}/>
       <h3>{props?.resData?.info?.name} | { props?.resData?.info?.avgRating}</h3>
      <h4>{props?.resData?.info?.cuisines.join(", ")}</h4> 
  </div>
     )
  }

  export default RestaurantCard;