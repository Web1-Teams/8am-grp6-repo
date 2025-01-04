import "./Homepage.css";
import logoo from "./logoo.png"
import videoSrc from "./video native.mp4"

const Homepage = () => {
  
  return (
    <div>


     <section className="video-1">
<video autoPlay loop muted>

<source src={videoSrc}
type="video/mp4" />

</video>          
      </section>
      <br />
      <div className="content-sub"><h2>About An-Najah Hospital</h2>
         <p>
         Our website is an innovative platform designed to enhance the
                    healthcare experience by providing comprehensive services that
                    make accessing medical information simple and efficient.
                     Through the website, you can explore a detailed list of
         available doctors, review their specialties and medical
        expertise, and select the doctor best suited to your health
         needs. The platform also offers accurate
        information about doctors schedules and hospital services,
         with the convenience of booking
        appointments online.  
                    In addition, users can access helpful health tips and educational  
        resources to support their wellness journey. The website also provides  
        timely updates on hospital news, events, and community programs.  
        For emergencies, the platform ensures you can quickly find critical contact  
        details and essential guidance.
                    

         </p>
        
        
          
        <br />
        
        <div className="addition" ><h4>Insurance Company</h4><br />
        <img
            src={logoo}
            alt="logoo.png"
            className="footer-logo"
          />
        </div>
        <br />
      </div>

      </div>
  );
};

export default Homepage;
