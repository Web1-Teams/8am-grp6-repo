


import { createBrowserRouter } from 'react-router-dom';
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorSectionPhar from './pharmcyCOM/DoctorSection';
import PageContentPhar from './pharmcyCOM/PageContent';
import ServicePhar from './pharmcyCOM/Service';

import DoctorSectionPsy from './psycholgicl/DoctorSection';
import PageContentPsy from './psycholgicl/PageContent';
import ServicePsy from './psycholgicl/Service';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/pharmacy",
                element: <PageContentPhar/>,
                children: [
                    {
                        path: "doctors",
                        element: <DoctorSectionPhar/>,
                     
                    },
                     {
                        path: "services",
                        element: <ServicePhar/>
                    }
                ]
            },
            {
                path: "/psychological",
                element: <PageContentPsy/>,
                children: [
                    {
                        path: "doctors",
                        element: <DoctorSectionPsy/>
                    },
                    {
                         path: "services",
                         element: <ServicePsy/>
                    }
                ]
            }
        ]
    }
])

export default router;