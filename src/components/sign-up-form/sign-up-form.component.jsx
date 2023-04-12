import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss"
import Button from "../button/button.componrnt";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields()
    } catch (error) {
      
      console.error(error);
    }
  };
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }; 
  return (
    <div className="sign-up-container">
    <h2>Don't have an account</h2>
      <span>Sign Up with your email and password </span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
        label={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        
        <FormInput
        label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

       
        <FormInput
        label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

       
        <FormInput
        label={"Confirm Password"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
