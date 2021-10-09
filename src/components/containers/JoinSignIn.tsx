import React from "react"
import Button from "../elements/Button";

const JoinSignIn: React.FC = () => {
    return (
        <div className="join-signin__container">
            <Button 
                text="JOIN"
                link="/"
            />
            <Button 
                text="SIGN IN"
                link="/sign-in"
            />
        </div>
    )
}

export default JoinSignIn;