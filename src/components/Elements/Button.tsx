import React from "react"

interface Props {
    text: string,
    link: string,
    newWindow?: boolean,
    logo?: string
}

const Button: React.FC<Props> = ({ text, link, newWindow, logo }) => {
    return (
        <div className="button button__container">
            {logo ? <img src={logo} alt="text" /> : ''}
            <a href={link} target={newWindow ? '_blank' : ''} rel="noreferrer">{text}</a>
        </div>
    )
}

export default Button;