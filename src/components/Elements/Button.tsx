import React from "react";

interface Props {
    text: string,
    link: string,
    activeClass?: string,
    type?: string
    newWindow?: boolean,
    logo?: string,
}

const Button: React.FC<Props> = ({ text, link, newWindow, logo, type, activeClass }) => {
    
    return (
        <div className="button__container">
            {logo ? <img src={logo} alt="text" /> : ''}
                <a 
                    href={link} 
                    target={newWindow ? '_blank' : ''} 
                    rel="noreferrer"
                    className={`btn__${type}-${activeClass}`}
                >
                    {text}
                </a>
        </div>
    )
}

export default Button;