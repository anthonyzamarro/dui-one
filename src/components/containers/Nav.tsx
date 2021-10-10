import React from "react";
import { useLocation } from "react-router";
import Button from "../elements/Button";

const Nav: React.FC = () => {
    let location = useLocation();

    return (
        <nav className="nav__container">
            <Button 
                text="JOIN"
                link="/"
                type="link"
                activeClass={ location.pathname === '/' && true }
            />
            <div className="nav__divider"></div>
            <Button 
                text="SIGN IN"
                link="/sign-in"
                type="link"
                activeClass={ location.pathname === '/sign-in' && true }
            />
        </nav>
    )
}

export default Nav;