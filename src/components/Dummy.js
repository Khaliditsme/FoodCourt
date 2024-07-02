import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../utils/constant.js";
import { Shimmer } from "./Shimmer.js";
import "../css/RestaurantMenu.css";

const Dummy = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const response = await fetch(FETCH_MENU_URL + resId);
    const json = await response.json();

    // console.log(json);
    const menuItemsList =
      json.data.cards[4]["groupedCard"].cardGroupMap.REGULAR.cards;
    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const NestedItemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

    const menu = menuItemsList.map((item) => {
      if (
        item.card.card["@type"] === itemCategory ||
        item.card.card["@type"] === NestedItemCategory
      ) {
        return item.card.card;
      }
    });

    const modifiedData = {
      info: json.data.cards[2].card.card.info,
      menu: menu.filter((value) => value !== undefined),
    };

    // setRestaurant(modifiedData);
    console.log(modifiedData);
    setresInfo(modifiedData);
  };

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="menu_container">
      <div className="resmenu_top">
        <div className="resmenu_top_right">
          <h1>{resInfo.info.name}</h1>
          <h4>{resInfo.info.cuisines.join(", ")}</h4>
          <h4>
            {" "}
            {resInfo.info.locality} {resInfo.info.city}{" "}
          </h4>
        </div>

        <div className="resmenu_top_left">
          <h4>❇️{resInfo.info.avgRating}</h4>
          <h4>{resInfo.info.totalRatingsString}</h4>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
