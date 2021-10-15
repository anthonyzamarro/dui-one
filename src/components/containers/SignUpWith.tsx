import React from "react"

interface Props {
    title: string,
    body: string,
    wrap?: boolean
}

const SignUpWith: React.FC<Props> = ({ title, body, children, wrap }) => {
    return (
        <section className="signup__container">
            <h2>{ title }</h2>
            <div className={`signup__container__inner ${wrap ? 'flex-wrap' : ''}`}>
                { children } 
            </div>
            { body }
        </section>
    )
}

export default SignUpWith;