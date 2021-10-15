import React from "react";

interface Props {
    targetText: string
}

const Modal: React.FC<Props> = ({ targetText }) => {
    return (
        <section className="modal__container">
            <p id="modal__target">{targetText}</p>
            <div>
        
            </div>
        </section>
    )
}

export default Modal;