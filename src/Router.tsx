import {createBrowserRouter, RouteObject, RouterProvider as ReactRouterProvider} from "react-router-dom";
import {ReactNode} from "react";
import {Bolt, Calculate, Factory, LocalFireDepartment, WindPower} from "@mui/icons-material";
import {TbChartBubbleFilled} from "react-icons/tb";
import Heaters from "./pages/Heaters.tsx";
import Boilers from "./pages/Boilers.tsx";
import Turbines from "./pages/Turbines.tsx";
import Generators from "./pages/Generators.tsx";
import Chimneys from "./pages/Chimneys.tsx";

type AppRouteBase = RouteObject;


export type VisibleAppRoute = AppRouteBase & {
    hidden?: false;
    icon: ReactNode;
    label: string,
    category?: string,
}

export type AppRoute = VisibleAppRoute;

export const routeCategories = [
    "Calculators",
    "Building Info"
];

export const routes: AppRoute[] = [
    {
        path: "/",
        element: <h1>Calculator</h1>,
        icon: <Calculate/>,
        label: "Calculator",
        category: "Calculators",
    },
    {
        path: "/heaters",
        element: <Heaters/>,
        icon: <LocalFireDepartment/>,
        label: "Heaters",
        category: "Building Info",
    },
    {
        path: "/boilers",
        element: <Boilers/>,
        icon: <TbChartBubbleFilled/>,
        label: "Boilers",
        category: "Building Info",
    },
    {
        path: "/turbines",
        element: <Turbines/>,
        icon: <WindPower/>,
        label: "Turbines",
        category: "Building Info",
    },
    {
        path: "/generators",
        element: <Generators/>,
        icon: <Bolt/>,
        label: "Generators",
        category: "Building Info",
    },
    {
        path: "/chimneys",
        element: <Chimneys/>,
        icon: <Factory/>,
        label: "Chimneys",
        category: "Building Info",
    },
];

export const router = createBrowserRouter(routes);

export const RouterProvider = () => (<ReactRouterProvider router={router}/>);