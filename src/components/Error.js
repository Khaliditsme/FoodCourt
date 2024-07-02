

import svg from '../asset/error_404.svg'
import '../css/about.css'
import { useRouteError } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Error = ()=>{

    const err = useRouteError();
    console.log(err);

    return (
      <div className="about_container">
        <div className="error_top">
          <h1>OOPS {err.status} : {err.statusText}</h1>
          <div className="error_inside">
            <span>Return to home page</span>
            <span style={{ marginLeft: '2vh' }}><Link to='/'>Home</Link> </span>
          </div>
        </div>

        <div className="error_container">
          <img src={svg} alt="" className="error_svg" />
        </div>
      </div>
    );
}

export default Error