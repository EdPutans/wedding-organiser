import React from 'react';
import './styles.scss';
import { Input, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import CardWrap from '../../Components/LoggedOutWrapper/LoggedOutCardWrapper';
import { publics } from '../../routes';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import { getSignInError } from '../../redux/app/selectors';
import LabelledInput from '../Settings/LabelledInput/LabelledInput';

const Register = ({ error }) => {
  const [userData, setUserData] = React.useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirm: '',
  });
  const onChange = (field, val) => setUserData({ ...userData, [field]: val });
  return (
    <CardWrap
      title="Register"
      bottomLink={{
        text: 'Sign in',
        link: publics.login.path,
      }}
    >
      <LabelledInput
        className="LoggedOutCardWrap_input"
        value={userData.email}
        onChange={e => onChange('email', e)}
        placeholder="Email"
      />
      {error.email && <ErrorMessage text={error.email} />}
      <LabelledInput
        className="LoggedOutCardWrap_input"
        value={userData.firstName}
        onChange={e => onChange('firstName', e)}
        placeholder="First name"
      />
      {error.firstName && <ErrorMessage text={error.firstName} />}
      <LabelledInput
        className="LoggedOutCardWrap_input"
        value={userData.lastName}
        onChange={e => onChange('lastName', e)}
        placeholder="Last name"
      />
      {error.lastName && <ErrorMessage text={error.lastName} />}
      <LabelledInput
        className="LoggedOutCardWrap_input"
        value={userData.password}
        onChange={e => onChange('password', e)}
        placeholder="Password"
      />
      {error.password && <ErrorMessage text={error.password} />}
      <LabelledInput
        className="LoggedOutCardWrap_input"
        value={userData.passwordConfirm}
        onChange={e => onChange('passwordConfirm', e)}
        placeholder="Password Confirm"
      />
      {error.passwordConfirm && <ErrorMessage text={error.passwordConfirm} />}
      <Button className="LoggedOutCardWrap_button">Register</Button>
    </CardWrap>
  );
};

Register.propTypes = {};
Register.defaultProps = {
  error: {},
};

const mapStateToProps = state => ({
  error: getSignInError(state),
});

export default connect()(Register);
