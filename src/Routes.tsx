import { Routes, Route } from 'react-router-dom';
import Table from "./pages/table/Table";
import Forms from "./pages/forms/Forms";
import Browser from "./pages/browser/Browser";

const routes = [
    {
        name: "Table",
        path: "/table",
        element: Table
    }, {
        name: "Forms",
        path: "/forms",
        element: Forms
    }, {
        name: "Browser",
        path: "/browser",
        element: Browser
    }]

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map((route) => {
                const ElementNode = route.element;
                return <Route path={route.path} element={<ElementNode />} />
            })
            }
        </Routes>
    )
}

export { routes };
export default AppRoutes;