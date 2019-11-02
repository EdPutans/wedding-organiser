import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import ReactResizeDetector from 'react-resize-detector';
import PropTypes from 'prop-types';

import Routes from './routes';
import materialTheme from './materialTheme';
import './shared.scss';
import { screenResizeAction } from './redux/mainPage/actions';
import { getIsMobile } from './redux/mainPage/selectors';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper';

const App = ({ detectResize, isMobile }) => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <ReactResizeDetector handleWidth onResize={w => detectResize(w)} />
        <MuiThemeProvider theme={materialTheme}>
          <Switch>
            <ContentWrapper isMobile={isMobile}>
              <Routes />
            </ContentWrapper>
          </Switch>
        </MuiThemeProvider>
      </React.Fragment>
    </BrowserRouter>
  );
};

App.propTypes = {
  detectResize: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isMobile: getIsMobile(state),
});

const mapDispatchToProps = dispatch => ({
  detectResize: w => dispatch(screenResizeAction(w)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
