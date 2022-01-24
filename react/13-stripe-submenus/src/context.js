import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: "", links: [] });

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openSubmenu = (text, coordinates) => {
        // getting the page that matches the page which is coming from the button
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setIsSubmenuOpen(true);
        setLocation(coordinates);
    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };
    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isSubmenuOpen,
                setIsSidebarOpen,
                setIsSubmenuOpen,
                openSidebar,
                openSubmenu,
                closeSidebar,
                closeSubmenu,
                location,
                page,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
