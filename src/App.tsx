import './App.css';
import Form from './components/containers/Form';
import CTA from './components/elements/CTA';
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
          <div className="SelectList__container">
            <label htmlFor="dob">DATE OF BIRTH:</label>
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
        <CTA
          link="www.reddit.com"
          text="JOIN ASOS"
          newWindow={true}
        />
      </Form>
    </div>
  )
}

export default App;
