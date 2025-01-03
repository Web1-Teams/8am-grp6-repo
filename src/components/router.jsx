// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/Main/MainLayout';
import Home from "./Pages/Home/Home/Home";
import DoctorSectionPhar from './components/pharmcyCOM/DoctorSection';
import PageContentPhar from './components/pharmcyCOM/PageContent';
import ServicePhar from './components/pharmcyCOM/Service';

import DoctorSectionPsy from './components/psycholgicl/DoctorSection';
import PageContentPsy from './components/psycholgicl/PageContent';
import ServicePsy from './components/psycholgicl/Service';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/pharmacy",
                element: <PageContentPhar />,
                children: [
                    {
                        path: "doctors",
                        element: <DoctorSectionPhar />,

                    },
                    {
                        path: "services",
                        element: <ServicePhar />
                    }
                ]
            },
            {
                path: "/psychological",
                element: <PageContentPsy />,
                children: [
                    {
                        path: "doctors",
                        element: <DoctorSectionPsy />
                    },
                    {
                        path: "services",
                        element: <ServicePsy />
                    }
                ]
            }
        ]
    }
])

export default router;