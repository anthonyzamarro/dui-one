import './App.css';
import Form from './components/containers/Form';
import CTA from './components/elements/CTA';
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
