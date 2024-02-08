import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavDashboard = () => {

    const firstLinkRef = useRef(null);

    useEffect(() => {
      // Enfoque automático en el primer enlace cuando el componente se monta
      firstLinkRef.current.focus();
    }, []);

    return(
        <nav className="bg-blue-500 flex flex-col justify-start w-16 h-svh space-y-7">
            <Link to={'/dashboard/new-sale'} className="text-white mt-16 hover:bg-blue-700 transition duration-300 focus:bg-blue-700 focus:outline-none focus:shadow-none"  ref={firstLinkRef}>
                <i className="fas fa-home pt-4 pb-4"></i>
            </Link>
            <Link  to={'/dashboard/other-page'} className="text-white hover:bg-blue-700 transition duration-300 focus:bg-blue-700">
                <i className="fa-regular fa-star pt-4 pb-4"></i>
            </Link>
            <Link to={'/dashboard/other-page'} className="text-white hover:bg-blue-700 transition duration-300 focus:bg-blue-700">
                <i className="fa-regular fa-square pt-4 pb-4"></i>
            </Link>
            <Link to={'/dashboard/other-page'} className="text-white hover:bg-blue-700 transition duration-300 focus:bg-blue-700">
                <i className="fa-regular fa-file pt-4 pb-4"></i>
            </Link>
            <Link to={'/dashboard/other-page'} className="text-white hover:bg-blue-700 transition duration-300 focus:bg-blue-700">
                <i className="fa-regular fa-user pt-4 pb-4"></i>
            </Link>
        </nav>
    )
}

export default NavDashboard;