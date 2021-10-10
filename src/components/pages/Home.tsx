import Form from '../containers/Form';
import Nav from '../containers/Nav';
import Layout from '../containers/Layout';
import Legal from '../containers/Legal';
import SignUpWith from '../containers/SignUpWith';
import Button from '../elements/Button';
import Checkbox from '../elements/Checkbox';
import Radio from '../elements/Radio';
import SelectList from '../elements/SelectList';
import TextField from '../elements/TextField';


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
        <Form>
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
        </Form>
        <Legal />
        <Button
            link="www.reddit.com"
            text="JOIN ASOS"
            newWindow={true}
            type="cta"
        />
    </Layout>
  )
}

export default Home;