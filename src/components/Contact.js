
import svg from '../asset/contact.svg'
import '../css/About.css'
const Contact = ()=>{
    return (
      <div>
        <div className="about_container">
          <h1>Contact Us</h1>
          <div className="contact_svg_container">
            <img src={svg} alt="" className="error_svg" />
          </div>
          <h1>Find the best food delivery service with Go Foods!</h1>
          <p>
            A food delivery application is nothing without a contact us section
            that is available 24 * 7. This is because faster delivery and hassle
            free ordering experience for the customers are of utmost importance.
            The contact us section must be easily accessible and should have all
            the necessary information that the customer might need.
          </p>
        </div>
      </div>
    );
}

export default Contact;



