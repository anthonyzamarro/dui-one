import React from "react";
import { useLocation } from "react-router";
import Button from "../elements/Button";

const Nav: React.FC = () => {
    let location = useLocation();

    return (
        <nav className="nav_container">
            <Button 
                text="JOIN"
                link="/"
                type="link"
                activeClass={location.pathname === '/' ? 'active' : ''}
            />
            <Button 
                text="SIGN IN"
                link="/sign-in"
                type="link"
                activeClass={location.pathname === '/sign-in' ? 'active' : ''}
            />
        </nav>
    )
}

export default Nav;