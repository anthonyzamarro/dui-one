import React from "react"

const Legal: React.FC = ({ children }) => {
    return (
        <section className="legal__container">
            <p className="legal__text">By creating your account, you agree to our <a href="/terms-and-conditions">Terms and Conditions</a> & <a href="/privacy-policy">Privacy Policy</a></p>
            { children }
        </section>
    )
}

export default Legal;