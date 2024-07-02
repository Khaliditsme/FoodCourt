import {useParams} from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import RestaurantCategory from '../components/RestaurantCategoies'
import RestaurantInfo from '../components/RestaurantInfo'
import  ShimmerLines  from "../components/ShimmerLines";
import '../css/RestaurantsDetails.css'

const RestaurantDetails = () => {
  const {resId} = useParams();

  const restaurant = useRestaurantDetails(resId);

  console.log("restaurant details", restaurant);

  return !restaurant ? <ShimmerLines/>
   : (
    <div className="restaurant-details">
      <RestaurantInfo restaurant={restaurant?.info} />
      <RestaurantCategory menu={restaurant?.menu} />
    </div>
  );
};

export default RestaurantDetails;
