import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="col-md-12 col-sm bg-info py-2">
            <nav className="navbar bg-info navbar-dark text-center">
                <Link to={"/"} className="navbar-brand ml-5 text-center">
                    React Redux CRUD operation
                </Link>
            </nav>
        </div>
    );
};

export default Header;