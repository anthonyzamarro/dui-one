import React, { useState } from "react";
import Checkbox from "../elements/Checkbox";
import Clickable from "../elements/Clickable"


const Parent: React.FC = () => {
    const [checked, setChecked] = useState(false);
    
    const selectAll: SelectAll = () => {
        setChecked(!checked);
    }

    return (
        <div className="parent__container">
            <Clickable
                text="SELECT ALL"
                selectAll={selectAll}
            />
            <fieldset className="fieldset__container-checkbox">
                        <div className="preferences__title_button__container">
                            <h3 className="preferences__title">CONTACT PREFERENCES</h3>
                            <h5 className="preferences__subtitle">Tell us which emails you’d like:</h5>
                        </div>
                        <div className="checkboxes">
                            <Checkbox
                                text="DISCOUNTS AND SALES"
                                check={checked}                       
                            />
                            <Checkbox
                                text="NEW STUFF"
                                check={checked}
                            />
                            <Checkbox
                                text="YOUR EXCLUSIVES"
                                check={checked}
                            />
                            <Checkbox
                                text="ASOS PARTNERS"
                                check={checked}
                            />
                        </div>
                    </fieldset>
        </div>
    )
}

export default Parent;