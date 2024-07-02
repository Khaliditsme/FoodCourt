
import image from '../asset/mars.png'
import '../css/OOPS.css'

const OOPS = ()=>{
    return (
      <div className="oops_container">
        <div className="logo_container">
          <img className="oops_logo" src={image} alt="" />
          {/* <img src={svg} alt="" /> */}
        </div>
        <h1>OOPS, NO restaurant founds</h1>
      </div>
    );
}

export default OOPS;