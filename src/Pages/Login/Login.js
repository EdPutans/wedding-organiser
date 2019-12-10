import React from 'react';
import './styles.scss';
import { Input, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardWrap from '../../Components/LoggedOutWrapper/LoggedOutCardWrapper';
import { publics } from '../../routes';
import { signIn } from '../../redux/app/thunks';
import { getSignInError } from '../../redux/app/selectors';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import LabelledInput from '../Settings/LabelledInput/LabelledInput';

const Login = ({ login, error }) => {
  const [userData, setUserData] = React.useState({
    email: '',
    password: '',
  });

  return (
    <CardWrap
      title="Sign in"
      bottomLink={{
        text: 'Not a member? Sign up.',
        link: publics.register.path,
      }}
    >
      <LabelledInput
        className="LoggedOutCardWrap_input"
        placeholder="Email"
        type="email"
        onChange={e => setUserData({ ...userData, email: e })}
      />
      <LabelledInput
        className="LoggedOutCardWrap_input"
        placeholder="Password"
        type="password"
        onChange={e => setUserData({ ...userData, password: e })}
      />
      {error && <ErrorMessage text={error} />}
      <Button className="LoggedOutCardWrap_button" onClick={() => login(userData)}>
        Login
      </Button>
    </CardWrap>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(signIn(userData)),
});
const mapStateToProps = state => ({
  error: getSignInError(state),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
