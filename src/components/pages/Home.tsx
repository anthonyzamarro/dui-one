import Form from '../containers/Form';
import Legal from '../containers/Legal';
import Modal from '../containers/Modal';
import Nav from '../containers/Nav';
import Preferences from '../containers/Preferences';
import SignUpWith from '../containers/SignUpWith';
import Button from '../elements/Button';
import Radio from '../elements/Radio';
import SelectList from '../elements/SelectList';
import TextField from '../elements/TextField';
import Layout from '../layout/Layout';


const Home: React.FC = () => {


    return (
    <Layout>
        <Nav />
        <SignUpWith 
            title="SIGN UP WITH..."
            body="Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil"
        >
            <Button 
                text="Google"
                link="https://www.google.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
            <Button 
                text="Apple"
                link="https://www.apple.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
            <Button 
                text="Facebook"
                link="https://www.facebook.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
        </SignUpWith>
    <main className="main__container">
        <Form>
            <div className="signup__form__container">
                <fieldset className="fieldset__container-textfield">
                    <h2 className="signup__form__title">OR SIGN UP WITH</h2>
                    <TextField 
                        type="email"
                        name="EMAIL ADDRESS:"
                        helperText="We'll send your order confirmation here"
                    />
                    <TextField 
                        type="text"
                        name="FIRST NAME:"
                    />
                    <TextField 
                        type="text"
                        name="LAST NAME:"
                    />
                    <TextField 
                        type="password"
                        name="PASSWORD:"
                        helperText="Must be 10 or more characters"
                    />
                </fieldset>
            </div>
            <div className="selectlist__container">
                <fieldset className="fieldset__container-selectlist">
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
                        name="YYYY"
                        numbers={{start: 1900, end: 2021}}
                    />
                    <small>You need to be 16 or over to use ASOS</small>
                </fieldset>
            </div>
            <div className="radio__container">
                <fieldset className="fieldset__container-radio">
                    <label className="interest__title">MOSTLY INTERESTED IN:</label>
                    <Radio
                        text="Womanswear"
                        name="gender"
                    />
                    <Radio
                        text="Mensswear"
                        name="gender"
                    />
                </fieldset>
            </div>
            <div className="checkbox__container">
                <Preferences />
            </div> 
        </Form>
        <Modal 
            targetText="Tell me more about these..."
        />
        <Legal> 
            <div className="cta__container">
                <Button
                    link="www.reddit.com"
                    text="JOIN ASOS"
                    newWindow={true}
                    type="cta"
                />
            </div>
        </Legal>
    </main>
    </Layout>
    
  )
}

export default Home;
