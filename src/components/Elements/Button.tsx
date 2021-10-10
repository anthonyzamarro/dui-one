import React from "react";

interface Props {
    text: string,
    link: string,
    activeClass?: boolean,
    type?: string
    newWindow?: boolean,
    logo?: string,
}

const Button: React.FC<Props> = ({ text, link, newWindow, logo, type, activeClass }) => {
    const isActive = activeClass ? '-active' : '';
    
    return (
        <div className="button__container">
            {logo ? <img src={logo} alt="text" /> : ''}
                <a 
                    href={link} 
                    target={newWindow ? '_blank' : ''} 
                    rel="noreferrer"
                    className={`btn__${type}${isActive} ${type}`}
                >
                    {text}
                </a>
        </div>
    )
}

export default Button;