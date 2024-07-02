
import '../css/RestaurantCard.css'
import {IMAGE_CDN_URL} from '../utils/constant'
import img from '../asset/logo.png'


const ResturantCard = (props) =>{
    const { name, cuisines, avgRating, sla ,cloudinaryImageId} = props?.Data;
    return (
      <div className='res-card-container'>
        <div className="res-cards">
          <div className="res-img-container">
            <img
              className="res-image"
              src={IMAGE_CDN_URL + cloudinaryImageId}
              alt=""
            />
          </div>

          <div className="combine">
            <div className="outside">
              <p className="left-most content">{name}</p>
              <p className="left-most content">{cuisines}</p>
            </div>

            <div className="inner">
              <p className="content">❇️{avgRating}</p>
              <p className="content">{sla?.deliveryTime} Min</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ResturantCard