import {CDN_IMG} from "../utils/constant"

const RestaurantCard = (props)=>{
    // console.log(props);
    
    return(
      <div className="res-card">
        
      <img src={
       CDN_IMG + props.resData.data.cloudinaryImageId}/>
      <h3>{props.resData.data.name} | { props.resData.data.avgRating}</h3>
      <h4>{props.resData.data.cuisines.join(", ")}</h4> 
  </div>
     )
  }

  export default RestaurantCard;