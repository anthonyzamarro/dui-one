import React from "react";
import Form from "../containers/Form";
import Nav from "../containers/Nav";
import Layout from "../layout/Layout";
import SignUpWith from "../containers/SignUpWith";
import Button from "../elements/Button";
import TextField from "../elements/TextField";

const SignIn: React.FC = () => {
    return (
        <Layout>
            <Nav />
            <Form>
                <TextField
                    type="email"
                    name="email"
                />
                <TextField
                    type="password"
                    name="password"
                />
                <Button
                    text="SIGN IN"
                    link="#"
                />
                <Button
                    text="Forgot Password?"
                    link="#"
                />
            </Form>
            <SignUpWith
                title="OR SIGN IN WITH..."
                body=""
                wrap={true}
            >
                <Button 
                text="GOOGLE"
                link="https://www.google.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
            <Button 
                text="APPLE"
                link="https://www.apple.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
            <Button 
                text="FACEBOOK"
                link="https://www.facebook.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
            <Button 
                text="TWITTER"
                link="https://www.twitter.com"
                newWindow={true}
                logo="https://via.placeholder.com/50"
            />
            </SignUpWith>
        </Layout>
    )
}

export default SignIn;