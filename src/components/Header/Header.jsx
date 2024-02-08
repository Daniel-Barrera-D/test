import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useScrollToRef from "../../hooks/useScrollToRef";
import { RefContext } from "../../context/RefContext";

const Header = () => {

    const { goToRef } = useScrollToRef();
    const { contentOneRef, contentTwoRef } = useContext(RefContext);

    return(
        <header>
            <nav className="flex justify-end space-x-4 py-8 px-16">
                <Link to='/' onClick={() =>goToRef(contentOneRef)} className="text-xl font-semibold hover:text-gray-500 transition duration-300 ease-in-out">Content 1</Link>
                <Link to='/' onClick={() => goToRef(contentTwoRef)} className="text-xl font-semibold hover:text-gray-500 transition duration-300 ease-in-out">Content 2</Link>
                <Link to='/login' className="text-blue-500 text-xl font-semibold hover:text-blue-800 transition duration-300 ease-in-out">Login</Link>
            </nav>
        </header>
    )
}

export default Header;