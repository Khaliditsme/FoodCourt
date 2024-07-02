
import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../utils/constant.js";
import { Shimmer } from "./Shimmer.js";
import "../css/RestaurantInfo.css";

const Restaurantinfo = ({restaurant}) => {
  return (
    <div className="menu_container">
      <div className="resmenu_top">
        <div className="resmenu_top_right">
          <h1>Name :{restaurant?.name}</h1>
          <h4>{restaurant?.cuisines.join(", ")}</h4>
          <h4>
            {" "}
            {restaurant?.locality} {restaurant?.city}{" "}
          </h4>
        </div>

        <div className="resmenu_top_left">
          <h4>❇️{restaurant?.avgRating}</h4>
          <h4>{restaurant?.totalRatingsString}</h4>
        </div>
      </div>
    </div>
  );
};

export default Restaurantinfo;
