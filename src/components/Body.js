import RestaurantCard,{withPromottedlabel} from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = ()=>{

   const[allRestaurants, setAllRestaurants] = useState([]);
   const [listOfRestaurent,setListOfRestaurent] = useState([])
   const[searchText,setSearchText] = useState("");

   const RestaurantCardwithPromoted = withPromottedlabel(RestaurantCard);

   const isOnline = useOnlineStatus();


   useEffect(()=>{
    getData(); 
    },[]);

   async function getData(){
    const data =await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.329731&lng=76.8342957&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json)
    const resDatas = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurent(resDatas);
    setAllRestaurants(resDatas);
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); 
  
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
   
    if(isOnline === false){
      return <h1>Opps please check you're internet connection.</h1>
    }
    if(listOfRestaurent.length === 0){
      return (
        <div>
      <h1>No Rest found!</h1>
      <button className="mx-2 px-2 bg-yellow-500 rounded-[4px] text-white uppercase font-medium text-sm" onClick={()=>{return setListOfRestaurent(allRestaurants)}}>Clear</button>
      </div>
      )
    }

   const{loggedInUser,setUserName} = useContext(UserContext);
   
    return listOfRestaurent?.length === 0 ? <Shimmer /> :(
    
      <div className="body">  
      <div className="flex items-center justify-between">
      <div className="search-box flex" style={{margin:"20px"}}>
        <input type="text" placeholder=" Search...!" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
          const filteredRestaurents = resSearch(allRestaurants,searchText);
          setListOfRestaurent(filteredRestaurents);
           }}/>
        <button className="rounded-[12px] px-2 mx-4 bg-purple-900 text-white text-sm" onClick={()=>{
        const filteredRestaurents = resSearch(allRestaurants,searchText);
          setListOfRestaurent(filteredRestaurents);
          }}>Search...</button>
          
        </div> 
        <div>
        <label>User Name</label>
        <input className="border border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
      </div>   
        <div className="search" style={{marginBottom:"20px"}}>
         
         <button className="px-2 bg-green-500 rounded-[4px] text-white uppercase font-medium text-sm" onClick={()=>{
         const filteredRes = listOfRestaurent.filter((res)=>{return res.info.avgRating > 3.8});
         //console.log(filteredRes);
        setListOfRestaurent(filteredRes);
          }}>Top rated restaurants</button>

          <button className="mx-2 px-2 bg-yellow-500 rounded-[4px] text-white uppercase font-medium text-sm" onClick={()=>{return setListOfRestaurent(allRestaurants)}}>Clear</button>
    
        </div>
        </div>
         <div className="rest-container flex flex-wrap p-3">
   
   {listOfRestaurent.map((res,index)=>{
      return(
       <Link to={"/restaurant/" + res.info.id } key={res.info.id}>
        {
         res.info.veg ? <RestaurantCardwithPromoted resData={res}/> : <RestaurantCard resData={res}/>
        } 
         </Link>
      )
    })
  
   }


  
         </div>
      </div>
    )
  }

  export default Body;