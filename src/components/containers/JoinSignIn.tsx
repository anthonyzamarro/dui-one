import React, { useState } from "react"
import Button from "../elements/Button";

const JoinSignIn: React.FC = () => {
    const [active, setActive] = useState();
    return (
        <section className="join-signin__container">
            <Button 
                text="JOIN"
                link="/"
                type="link"
            />
            <Button 
                text="SIGN IN"
                link="/sign-in"
                type="link"
            />
        </section>
    )
}

export default JoinSignIn;