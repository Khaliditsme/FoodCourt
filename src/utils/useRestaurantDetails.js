
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../utils/constant.js";
import  Shimmer from "../components/Shimmer.js";
import "../css/RestaurantInfo.css";

const useRestaurantDetails = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  const [restaurantMenu, setrestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const response = await fetch(FETCH_MENU_URL+resId);
    const json = await response.json();
    console.log(json);
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

    console.log(modifiedData);
    setresInfo(modifiedData);
  };

  return resInfo;
};

export default useRestaurantDetails;
