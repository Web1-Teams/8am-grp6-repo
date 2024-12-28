 import "bootstrap/dist/css/bootstrap.min.css";
import DoctorSajedImage from '/src/assets/images/Dr.Sajed.png';
import DoctorYahiaImage from '/src/assets/images/Dr. Yahya Ismail.png';
import DoctorYunisImage from '/src/assets/images/Dr. Yunis.png';
import AnNajahLogo from '/src/assets/images/NNUH.jpg'
import stethoscopeImage from '/src/assets/images/Cardiology.jpg'


import{useState} from 'react';
function CardiologySection() {
  const doctors = [
    { name: 'Dr. Sajed Majadlah', image: DoctorSajedImage, appointments: ['Monday 9:00 AM', 'Tuesday 2:00 PM', 'Wednesday 10:00 AM'] },
    { name: 'Dr. Yahya Ismail', image: DoctorYahiaImage, appointments: ['Tuesday 11:00 AM', 'Thursday 1:00 PM', 'Friday 9:30 AM'] },
    { name: 'Dr. Yunis Daralammouri', image: DoctorYunisImage, appointments: ['Monday 3:00 PM', 'Wednesday 1:00 PM', 'Friday 2:00 PM'] },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showAppointments, setShowAppointments] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <div>
   
   <header className="bg-info text-white p-2">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-info"> 
                        <div className="container-fluid">
                            <a href="nav" className="navbar-brand">
                                <img src={AnNajahLogo} alt="..." style={{ width: '90px', height: '60px' }} />
                            </a>
                            <h1 className="h4 mb-0 text-white ms-2">An-Najah National University Hospital</h1> 
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded={menuOpen ? "true" : "false"}
                                aria-label="Toggle navigation"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">About</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

   
    <div className="container-fluid p-4 bg-light"> 
      <div className="row">
        <div className="col-md-4">
          <div className="card">  
            <div className="card-body">
              <h2 className="card-title text-center">Cardiology Section</h2>
              <div className="card-title text-center"> 
                <label className="card-title text-center">Select a Doctor:</label>
                <div className="d-grid gap-2"> 
                  {doctors.map((doctor, index) => (
                    <button
                    key={index}
                    className={`btn btn-primary d-flex align-items-center ${selectedDoctor === doctor.name ? 'active' : ''}`}
                    onClick={() => setSelectedDoctor(doctor.name)}
                    style={{ gap: '20px' }} 
                >
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                    />
                    {doctor.name}
                </button>

                
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>




        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <img src={stethoscopeImage} alt="Stethoscope and heart" className="img-fluid mb-3" /> 

         
              <h6 className="bg-info text-white p-2 rounded card-title text-center">Diagnosis and treatment of all cardiac electrical disorders using the following techniques:</h6>
              <ul className="list-group">
                <li className="list-group-item card-title text-center">Two-dimensional (2D) Ablation System</li>
                <li className="list-group-item card-title text-center">Three-dimensional (3D) Mapping Ablation System</li>
                <li className="list-group-item card-title text-center">Treatment through cooling (cryoablation)</li>
              </ul>


              {selectedDoctor && (
                <div>

                  


                
                  <div className="clearfix"> 
                    {doctors.find(doctor => doctor.name === selectedDoctor)?.image && (
                      <img
                        src={doctors.find(doctor => doctor.name === selectedDoctor).image}
                        alt={`${selectedDoctor}'s profile`}
                        className="float-start rounded-circle me-3" 
                        style={{ width: "100px", height: "100px" }} 
                      />

                      
                    )}

                   <div> 



                   <h2 className="card bg-info text-white p-2 rounded text-center">Appointments</h2>

                                                
                 <button
                className="btn btn-primary text-center mb-3" // Add margin-bottom
                 onClick={() => setShowAppointments(!showAppointments)}
                 >
              {showAppointments ? 'Hide Appointments' : `Click To See Appointments for ${selectedDoctor}`}
                </button>

            {showAppointments && (
           <ul className="list-group mt-3" style={{paddingLeft: 0}}>
             {doctors.find(doctor => doctor.name === selectedDoctor)?.appointments.map((appointment, index) => (
             <li key={index} className="btn btn-primary text-center"  style={{ borderTop: 'none', borderBottom: index < doctors.find(doctor => doctor.name === selectedDoctor).appointments.length - 1 ? '1px solid rgba(0,0,0,.125)' : 'none', padding: '10px 15px' }}>{appointment}</li>
              ))}
               {doctors.find(doctor => doctor.name === selectedDoctor)?.appointments.length === 0 && (
              <li className="lbtn btn-primary text-center">No appointments available.</li>
               )}
                </ul>
               )}

                     

               </div>
                </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


  );
}

export default CardiologySection; 