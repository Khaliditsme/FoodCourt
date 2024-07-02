
import '../css/Body.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {useState, useEffect} from 'react';
import reslist from '../utils/mockdata.js';
import {FETCH_RESTAURANTS} from '../utils/constant.js'
import ResturantCard from '../components/ResturantCard.js'
import {Shimmer} from "../components/Shimmer.js";
import OOPS from '../components/OOPs_not_found.js'
import {Link} from 'react-router-dom'

let restaurant_trough_api=[]
const Body = () =>{
  const [listofRestaurant,setlistofRestaurants] = useState([]);  
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);  
  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData() {
    const response = await fetch(FETCH_RESTAURANTS);
    const json = await response.json();

    // initialize checkJsonData() function to check Swiggy Restaurant data
    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);
    console.log(json)
    // update the state variable restaurants with Swiggy API data
    // setCategoryMenu(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    // );
    setlistofRestaurants(resData);
    setfilteredRestaurant(resData);
    restaurant_trough_api=resData;
    // setFilteredRestaurants(resData);
  }
  

  // for seach functionality 
  const[text,settext] = useState("")

  const handleInputChange = (event)=>{
      settext(event.target.value);
      // setlistofRestaurants(restaurant_trough_api);
  }

  // for search_button 
  const [oops, setoops] = useState(false);
  const search = ()=>{
    const list = listofRestaurant.filter((item)=>{
      return item?.info?.name?.toLowerCase().includes(text.toLowerCase())
    }) 
  
    if (list.length == 0) setoops(true);
    else setoops(false);
    // setlistofRestaurants(list);
    setfilteredRestaurant(list);
  }
  
  // top reated button 
 
  const top_rated = ()=>{
    const filtered_list = filteredRestaurant.filter((item)=>{
      return(item.info.avgRating>=4.5)
    })

    if(filtered_list.length!=0){
      setfilteredRestaurant(filtered_list)
      setoops(false);
    }
    else setoops(true);
  }
  
  // back to home button
  const back_to_home = ()=>{
    // setfilteredRestaurant(restaurant_trough_api);
    setfilteredRestaurant(listofRestaurant);
  }
  
  if (oops) return <OOPS />
  return listofRestaurant.length == 0 ? (
        <Shimmer />
    ) : (
      <div className="body">
        <div className="body-top">
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
            value={text}
          />
          <button className="search_btn" onClick={search}>
            Serach
          </button>
          <button className="body_btn1" onClick={top_rated}>
            Top Rated
          </button>
          <button className="body_btn2" onClick={back_to_home}>
            All Restaurant
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((item) => {
            return <Link to={'/restaurant/'+item?.info?.id}><ResturantCard key={item?.info?.id} Data={item.info} /> </Link>;
          })}
        </div>
      </div>
    );
}

export default Body;