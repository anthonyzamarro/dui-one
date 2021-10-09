import './App.css';
import Form from './components/containers/Form';
import JoinSignIn from './components/containers/JoinSignIn';
import Legal from './components/containers/Legal';
import SignUpWith from './components/containers/SignUpWith';
import Button from './components/elements/Button';


const App: React.FC = () => {
  return (
    <>
      <section className="img__container"><img src="https://via.placeholder.com/50" alt="logo" /></section>
      <main className="container">
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
          type="cta"
        />
      </main>
    </>
  )
}

export default App;
