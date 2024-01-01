import { useState,useEffect } from "react";

const useRestaurantMenu = (resID)=>{
  
    const[resInfo,setResInfo] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
     const data =await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.329731&lng=76.8342957&restaurantId=" + resID.resID);
        const json = await data.json();
        //console.log("Menu",json);
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;