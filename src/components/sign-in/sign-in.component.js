import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.util";
import CustomButton from "../custom-button/custom-button.component";
export class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>
        <form onSubmit={this.handlesubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            type="email"
            value={email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            name="password"
            type="password"
            value={password}
            required
          />
<div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
