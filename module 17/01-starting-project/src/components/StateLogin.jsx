import { useState } from "react";
import Input from "./Input";
import { isEmail, isEqualsToOtherValue, isNotEmpty, hasMinLength } from '../util/validation'

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  })

  const emailIsInvalid = 
    didEdit.email && 
    !isEmail(enteredValues.email) && 
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid = 
    didEdit.password && 
    !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    console.log('user email: ' + enteredValues.email);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false,
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label='Email' 
          id='email' 
          type='email' 
          name='email'
          error={emailIsInvalid && 'Please enter a valid email!'}
        />

        <Input 
          label='Password' 
          id='password' 
          type='password' 
          name='password'
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
