import "./App.css";
// import Homepage from "./components/Homepage/Homepage";
// import PageContent from "./components/physical therapy/PageContent";  
// import Feedback from "./components/Feedback/Feedback";
// import Footer from "./components/Footer/Footer";
// import AppointmentForm from "./components/AppointmentForm";
import Layout from "./components/routes/Layout.jsx"
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Homepage from "./components/Homepage/Homepage";
import Feedback from "./components/Feedback/Feedback.jsx"
import Pharmacy from "./components/pharmcyCOM/Pharmacy.jsx";
import Phsyotherapy from "./components/phsyotherapy/Phsyotherapy.jsx";
import Nutrition from "./components/nutrition/Nutrition.jsx";
import MedicalLaboratory from "./components/medicalLaboratory/medicalLaboratory.jsx";
import InfectionControl from "./components/infectionControl/InfectionControl.jsx";
import PsychologicalSocialServices from "./components/psychologicalSocialServices/PsychologicalSocialServices.jsx";
import InternalMedicine from "./components/internal-Medicine/internalMedicine/InternalMedicine.jsx";
import Gastrointestinal from "./components/gastrointestinal/Gastrointestinal.jsx";
import RheumatologyDisease from "./components/Rheumatology Disease/RheumatologyDisease.jsx";
import Oncology from "./components/oncology/Oncology.jsx";
import PediatricOncology from "./components/PediatricOncology/PediatricOncology.jsx";
import Pediatric from "./components/pediatric/Pediatric.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";

function App() {
  const router1 = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/home",
          element:<Homepage/>
        },
        {
          path:"/feedback",
          element:<Feedback/>,
        },
        {
          path:"/Pharmacy",
          element:<Pharmacy/>
        },
        {
          path:"/phsyotherapy",
          element:<Phsyotherapy/>,
        },
        {
          path:"/nutrition",
          element:<Nutrition/>,
        },        
        {
          path:"/medicalLaboratory",
          element:<MedicalLaboratory/>,
        },
        {
          path:"/infectionControl",
          element:<InfectionControl/>,
        },
        {
          path:"/psychologicalSocialServices",
          element:<PsychologicalSocialServices/>,
        },
        {
          path:"/internalMedicine",
          element:<InternalMedicine/>,
        },
        {
          path:"/gastrointestinal",
          element:<Gastrointestinal/>,
        },
        {
          path:"/rheumatologyDisease",
          element:<RheumatologyDisease/>,
        },{
          path:"/oncology",
          element:<Oncology/>,
        },{
          path:"/pediatricOncology",
          element:<PediatricOncology/>
        },
      
        {
          path:"/pediatric",
          element:<Pediatric/>,
        },{
          path:"/appointmentForm",
          element:<AppointmentForm/>
        }
        
      ]
    }
  
  ])
  return (
    <>
<RouterProvider router={router1}/>
    
    </>
  );
}

export default App;
