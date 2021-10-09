import React from 'react';
import Button from '../elements/Button';
import Checkbox from '../elements/Checkbox';
import Radio from '../elements/Radio';
import SelectList from '../elements/SelectList';
import TextField from '../elements/TextField';

const Form: React.FC = ({children}) => {
    return (
        <section className="form__container">
          <div className="input__container">
            <fieldset>
              <TextField 
                type="email"
                name="email"
                helperText="We'll send your order confirmation here"
              />
              <TextField 
                type="text"
                name="first name"
              />
              <TextField 
                type="text"
                name="last name"
              />
              <TextField 
                type="password"
                name="password"
                helperText="Must be 10 or more characters"
              />
            </fieldset>
          </div>
          <div className="selectlist__container">
            <fieldset>
              <label className="dob__title">DATE OF BIRTH:</label>
              <SelectList 
                name="DD"
                numbers={{start: 1, end: 31}}
              />
              <SelectList 
                name="MM"
                months={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
              />
              <SelectList 
                name="YY"
                numbers={{start: 1900, end: 2021}}
              />
            </fieldset>
            <small>You need to be 16 or over to use ASOS</small>
          </div>
          <div className="radio__container">
            <fieldset>
              <label className="interest__title">MOSTLY INTERESTED IN:</label>
                <Radio
                  text="womanswear"
                />
                <Radio
                  text="mensswear"
                />
            </fieldset>
          </div>
          <div className="checkbox__container">
            <fieldset>
              <h3 className="preferences__title">CONTACT PREFERENCES</h3>
              <h5 className="preferences__subtitle">Tell us which emails you’d like:</h5>
              <Button
                link="#"
                text="SELECT ALL"
                newWindow={false}
              />
              <Checkbox
                text="DISCOUNTS AND SALES"
              />
              <Checkbox
                text="NEW STUFF"
              />
              <Checkbox
                text="YOUR EXCLUSIVES"
              />
              <Checkbox
                text="ASOS PARTNERS"
              />
            </fieldset>
          </div> 
        </section>
    )
}

export default Form