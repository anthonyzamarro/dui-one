import React from "react"

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
            <a 
                href={link} 
                target={newWindow ? '_blank' : ''} 
                rel="noreferrer"
                className={`btn-${type}`}
            >
                {text}
            </a>
        </div>
    )
}

export default Button;