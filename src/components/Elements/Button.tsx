import React from "react";
import { Link } from "react-router-dom";

interface Props {
    text: string,
    link: string,
    type?: string
    newWindow?: boolean,
    logo?: string
}

const Button: React.FC<Props> = ({ text, link, newWindow, logo, type }) => {
    return (
        <div className="button__container">
            {logo ? <img src={logo} alt="text" /> : ''}
                <Link 
                    to={link} 
                    target={newWindow ? '_blank' : ''} 
                    rel="noreferrer"
                    className={`btn-${type}`}
                >
                    {text}
                </Link>
        </div>
    )
}

export default Button;