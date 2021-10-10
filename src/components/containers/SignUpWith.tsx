import React from "react"

interface Props {
    title: string,
    body: string
}

const SignUpWith: React.FC<Props> = ({ title, body, children }) => {
    return (
        <section className="signup__container">
            <h2>{ title }</h2>
            { children } 
            { body }
        </section>
    )
}

export default SignUpWith;