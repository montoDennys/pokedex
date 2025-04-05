import { Outlet, useLocation } from "react-router";
import { Page } from "../components/Page";

const titles = {
    "/": "Dashboard",
    "/my-collection": "Mi Colección",
    "/about": "Acerca de",
};

export const Layout = () => {
    const { pathname: currentPath } = useLocation();

    const isDetailsPage = currentPath.startsWith("/details/");

    const pageTitle = isDetailsPage
        ? `Detalles del Pokémon`
        : titles[currentPath] || "Not Found";

    return (
        <Page title={pageTitle}>
            <Outlet />
        </Page>
    );
};