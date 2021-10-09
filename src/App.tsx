import './App.css';
import Form from './components/containers/Form';
import JoinSignIn from './components/containers/JoinSignIn';
import Legal from './components/containers/Legal';
import SignUpWith from './components/containers/SignUpWith';
import Button from './components/Elements/Button';

const App: React.FC = () => {
  return (
    <div className="container">
      <JoinSignIn />
      <SignUpWith 
        title="SIGN UP WITH..."
        body="Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil"
      />
      <Form />
      <Legal />
      <Button
        link="www.reddit.com"
        text="JOIN ASOS"
        newWindow={true}
      />
    </div>
  )
}

export default App;
