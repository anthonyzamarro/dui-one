import React from "react"

interface Props {
    text: string,
    link: string,
    newWindow?: boolean
}

const CTA: React.FC<Props> = ({ text, link, newWindow }) => {
    return (
        <div className="button button__container">
            <a href={link} target={newWindow ? '_blank' : ''}>{text}</a>
        </div>
    )
}

export default CTA