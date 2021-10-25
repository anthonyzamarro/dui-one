import React from "react";
import Checkbox from "../elements/Checkbox";
import Clickable from "../elements/Clickable"


const Parent: React.FC = () => {
    const selectAll: SelectAll = () => {
        console.log('Preferences: ')
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
                                bool={false}
                            />
                            <Checkbox
                                text="NEW STUFF"
                                bool={false}
                            />
                            <Checkbox
                                text="YOUR EXCLUSIVES"
                                bool={true}
                            />
                            <Checkbox
                                text="ASOS PARTNERS"
                                bool={true}
                            />
                        </div>
                    </fieldset>
        </div>
    )
}

export default Parent;