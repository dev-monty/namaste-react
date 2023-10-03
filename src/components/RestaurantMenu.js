import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {CDN_IMG} from "../utils/constant"
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{

    const[resInfo,setResInfo] = useState([]);
    const param = useParams();
    
   
    const name = resInfo?.data?.cards[0]?.card?.card?.info.name;
    const city =resInfo?.data?.cards[0]?.card?.card?.info.city;
    const cloudinaryImageId = resInfo?.data?.cards[0]?.card?.card?.info.cloudinaryImageId;
    const costForTwoMessage = resInfo?.data?.cards[0]?.card?.card?.info.costForTwoMessage;
    const cuisines = resInfo?.data?.cards[0]?.card?.card?.info.cuisines;
    const offers = resInfo?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.offers;
    const recomended1 = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const recomended = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
   
 useEffect(()=>{
    getData()
 },[]);

 async function getData(){
    const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.329731&lng=76.8342957&restaurantId=" + param.resID); 
        const json = await data.json();
        console.log(json);
        setResInfo(json);
 }
 if (resInfo.length === 0){
    return <Shimmer />
 }

    return(
        <div className="menu">
            <span>Home / {city} / {name}</span>
            <h2 style={{marginBottom:"0"}}>{name}</h2>
            <p style={{marginTop:"3px",fontSize:"14px",color:"#93959f"}}>{cuisines.join(", ")}</p>
            <h4>🚴{city}</h4>
            <div className="offers">
            {
            offers.map((res,index)=><div key={index} className="offer-card"><h3>％ {res.info.description}</h3>
            <h4>{res.info.header} | {res.info.couponCode}</h4>
            </div>)
            }
         
            </div>
            <h3 style={{margin:" 25px 0px -14px 16px"}}>{name} Menu</h3>
            <div className="menu-border"></div>
            
            {/* {
                recomended.map((res)=><div key={res.card.info.id}>{res.card.info.name} - {res.card.info.defaultPrice/100  || res.card.info.price/100}
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + res.card.info.imageId} />
                </div>) 
                ||
                recomended1.map((res)=><div key={res.card.info.id}>{res.card.info.name} - {res.card.info.defaultPrice/100  || res.card.info.price/100}
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + res.card.info.imageId} />
                </div>) 
            } */}
           

           {
  recomended && recomended.length > 0
    ? recomended.map((res) => (
        <div>
        <div key={res.card.info.id} className="resMenu">
          {res.card.info.name} - ₹ {res.card.info.defaultPrice / 100 || res.card.info.price / 100}
          <img alt="image is not available" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + res.card.info.imageId} className="menuIMG"/>
        </div>
        <div className="menu-border"></div>
        </div>
      ))
    : recomended1 && recomended1.length > 0
    ? recomended1.map((res) => (
        <div>
        <div key={res.card.info.id} className="resMenu">
          {res.card.info.name} - ₹ {res.card.info.defaultPrice / 100 || res.card.info.price / 100}
          <img alt="image is not available" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + res.card.info.imageId} className="menuIMG"/>
        </div>
        <div className="menu-border"></div>
        </div>
      ))
    : <p>No items to display</p> // Optional: Handle the case when both arrays are empty
}


<div className="menu-border"></div>
        </div>
    )
}



export default RestaurantMenu;