import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = ()=>{

   const[allRestaurants, setAllRestaurants] = useState([]);
   const [listOfRestaurent,setListOfRestaurent] = useState([])
   const[searchText,setSearchText] = useState("");


   useEffect(()=>{
    getData(); 
    },[]);

   async function getData(){
    const data =await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.329731&lng=76.8342957&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json)
    const resDatas = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurent(resDatas);
    setAllRestaurants(resDatas);
    console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants); 
  
   }

   function resSearch(allres,searchtxt){
    const data = allres.filter((res)=>res.info.name.toLowerCase().includes(searchtxt.toLowerCase()));
    return data;
   }

   useEffect(()=>{
    const filteredRestaurents = resSearch(allRestaurants,searchText);
          setListOfRestaurent(filteredRestaurents);
  },[searchText])
  //  if(listOfRestaurent.length === 0){
  //   return <Shimmer />
  //  }
   
   
    return listOfRestaurent?.length === 0 ? <Shimmer /> :(
    
      <div className="body">  
      <div className="search-box" style={{margin:"20px"}}>
        <input type="text" placeholder=" Search...!" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
          const filteredRestaurents = resSearch(allRestaurants,searchText);
          setListOfRestaurent(filteredRestaurents);
           }}/>
        <button onClick={()=>{
        const filteredRestaurents = resSearch(allRestaurants,searchText);
          setListOfRestaurent(filteredRestaurents);
          }}>Search...</button>
        </div>    
        <div className="search" style={{marginBottom:"20px"}}>
         
         <button className="filter-btn" onClick={()=>{
         const filteredRes = listOfRestaurent.filter((res)=>{return res.info.avgRating > 4.3});
         //console.log(filteredRes);
        setListOfRestaurent(filteredRes);
          }}>Top rated restaurants</button>

          <button className="filter-btn" onClick={()=>{return setListOfRestaurent(allRestaurants)}}>Clear</button>
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