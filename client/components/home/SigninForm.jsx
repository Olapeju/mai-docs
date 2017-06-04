import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import TextInput from '../common/TextInput.jsx';

const SigninForm = ({ onChange, onSubmit, loading, errors }) => (
    <div className="col s12 z-depth-5 card-panel">
      <h2>LOGIN</h2>
      <form className="login-form">
        <div className="row">
          <div className="col s8 offset-s2">
            <TextInput
              type="text"
              label="Username/Email"
              name="loginId"
              icon="person"
              onChange={onChange}
              onBlur=""
              clearError=""
              error={errors.loginId}/>
          </div>
        </div>
        <div className="row">
          <div className="col s8 offset-s2">
            <TextInput
              type="password"
              label="Password"
              name="password"
              icon="lock"
              onChange={onChange}
              clearError=""
              error={errors.password}/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="submit"
              disabled={loading}
              value={loading ? 'Please wait...' : 'Login'}
              className=
                "btn waves-effect waves-light col s4 offset-s4 teal darken-1"
              onClick={onSubmit}/>
          </div>
          <div className="input-field col s12">
            <p className="margin center medium-small sign-up">
              Already have an account?
              <Link to="/signin"> Signin</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );

SigninForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default SigninForm;