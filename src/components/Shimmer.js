

import "../css/Shimmer.css";
import { IMAGE_CDN_URL } from "../utils/constant";
import image from "../asset/logo.png";
import { useState } from "react";



const Cards = ()=>{
    return (
        <div className="shimmer_container">
            <div className="shimmer_img">
            </div>

            <div className="shimmer_lines">
            </div>
            <div className="shimmer_lines">
            </div>
            <div className="shimmer_lines">
            </div>
            <div className="shimmer_lines special_line">
            </div>
        </div>
    );
}
const list = [{}, {}, {}, {}, {}, {}, {}, {}];
const Shimmer = () => {

  const [shimmer_list,sethhimmer_list]  =  useState(list)
  
  return (
    <div className="shimmer_body">
      {shimmer_list.map((item) => {
        return <Cards />;
      })}
    </div>
  );
};


export {  Shimmer };
