import React from "react"
import Button from "../Elements/Button";

interface Props {
    title: string,
    body: string
}

const SignUpWith: React.FC<Props> = ({ title, body }) => {
    return (
        <div className="signup signup__container">
            <h2>{title}</h2>
            <Button 
                text="Google"
                link="https://www.google.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
            <Button 
                text="Apple"
                link="https://www.apple.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
            <Button 
                text="Facebook"
                link="https://www.facebook.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
            {body}
        </div>
    )
}

export default SignUpWith;