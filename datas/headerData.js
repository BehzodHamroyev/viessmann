import { FaHome, FaServer, FaTools, FaWrench, FaBuilding, FaAddressBook } from 'react-icons/fa'

export const headerData = [
    { to: "/", title: "Home", icon: <FaHome /> },
    { to: "/products", title: "Products", icon: <FaWrench /> },
    { to: "/application", title: "Application", icon: <FaTools /> },
    { to: "/server", title: "Services", icon: <FaServer /> },
    { to: "/about", title: "About", icon: <FaBuilding /> },
    { to: "/contact", title: "Contacts", icon: <FaAddressBook /> },
]