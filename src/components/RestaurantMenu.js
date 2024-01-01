import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_IMG } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
 // const [showIndex, setShowIndex] = useState(null);
  const param = useParams();

  const resInfo = useRestaurantMenu(param);

  const name = resInfo?.data?.cards[0]?.card?.card?.info.name;
  const city = resInfo?.data?.cards[0]?.card?.card?.info.city;
  const cuisines = resInfo?.data?.cards[0]?.card?.card?.info.cuisines;
  const offers =
    resInfo?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.offers;

  // console.log("Menu",resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const catogories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (resInfo.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="menu m-10">
      <span className="text-xs">
        Home / {city} / {name}
      </span>
      <h2 className="mb-0 text-lg font-bold ">{name}</h2>
      <p style={{ marginTop: "3px", fontSize: "14px", color: "#93959f" }}>
        {cuisines.join(", ")}
      </p>
      <h4>🚴 - {city}</h4>
      <div
        className="offers flex justify-between"
        style={{
          borderBottom: "1px dashed #d3d3d3",
          paddingBottom: "10px",
        }}
      >
        {offers.map((res, index) => (
          <div
            key={index}
            className="offer-card text-center border-solid border-2 p-2 text-sm text-[#686b78]"
          >
            <h3>％ {res.info.description}</h3>
            <h4>
              {res.info.header} | {res.info.couponCode}
            </h4>
          </div>
        ))}
      </div>
      {catogories.map((category, index) => {
        return (
          <RestaurantCategory
            key={index}
            data={category.card.card}
            //accordion={index === showIndex ? true : false}
            //setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
