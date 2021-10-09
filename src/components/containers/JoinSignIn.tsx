import React from "react"
import Button from "../elements/Button";

const JoinSignIn: React.FC = () => {
    return (
        <section className="join-signin__container">
            <Button 
                text="JOIN"
                link="/"
            />
            <Button 
                text="SIGN IN"
                link="/sign-in"
            />
        </section>
    )
}

export default JoinSignIn;