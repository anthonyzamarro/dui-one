import './App.css';
import Form from './components/containers/Form';
import CTA from './components/Elements/CTA';
import TextField from './components/Elements/TextField';

const App: React.FC = () => {
  return (
    <div className="container">
      <Form>
        <TextField 
          placeholder="email"
          type="email"
        />
        <TextField 
          placeholder="First Name"
          type="text"
        />
        <CTA/>
      </Form>
    </div>
  )
}

export default App;
