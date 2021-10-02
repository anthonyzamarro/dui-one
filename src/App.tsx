import './App.css';
import Form from './components/containers/Form';
import Button from './components/elements/Button';
import Checkbox from './components/elements/Checkbox';
import Radio from './components/elements/Radio';
import SelectList from './components/elements/SelectList';
import TextField from './components/elements/TextField';

const App: React.FC = () => {
  return (
    <div className="container">
      <Form>
        <TextField 
            placeholder="email"
            type="email"
            name="email"
            helperText="We'll send your order confirmation here"
          />
          <TextField 
            placeholder="First Name"
            type="text"
            name="first name"
          />
          <TextField 
            placeholder="Last Name"
            type="text"
            name="last name"
          />
          <TextField 
            placeholder="Password"
            type="password"
            name="password"
            helperText="Must be 10 or more characters"
          />
          <div className="selectlist__container">
            <h3 className="dob__title">DATE OF BIRTH:</h3>
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
            <small>You need to be 16 or over to use ASOS</small>
          </div>
          <div className="radio__container">
            <h3 className="interest__title">MOSTLY INTERESTED IN:</h3>
            <Radio
              text="womanswear"
            />
            <Radio
              text="mensswear"
            />
          </div>
          <div className="checkbox__container">
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
          </div> 
        <Button
          link="www.reddit.com"
          text="JOIN ASOS"
          newWindow={true}
        />
      </Form>
    </div>
  )
}

export default App;
