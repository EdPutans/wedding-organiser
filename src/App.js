import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import ReactResizeDetector from 'react-resize-detector';
import PropTypes from 'prop-types';

import { recursivelyCreateRoutes, routes, publics } from './routes';
import materialTheme from './materialTheme';
import './shared.scss';
import { screenResizeAction } from './redux/app/actions';
import { getIsMobile } from './redux/app/selectors';
import { getCategories } from './redux/categories/selectors';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper';
import LoggedOutWrapper from './Components/LoggedOutWrapper/LoggedOutWrapper';

const App = ({ detectResize, isMobile, loggedIn, categories }) => {
  return (
    <React.Fragment>
      <ReactResizeDetector handleWidth onResize={w => detectResize(w)} />
      <MuiThemeProvider theme={materialTheme}>
        {/* DO NOT TOUCH THE NESTING OF COMPONENTS HERE!!!! */}
        <BrowserRouter>
          <Switch>
            {loggedIn ? (
              <ContentWrapper isMobile={isMobile}>
                {recursivelyCreateRoutes(routes)}
                {recursivelyCreateRoutes(categories)}
                {/* // add a 404!! */}
              </ContentWrapper>
            ) : (
              <LoggedOutWrapper>{recursivelyCreateRoutes(publics)}</LoggedOutWrapper>
            )}
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool,
  detectResize: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

App.defaultProps = {
  loggedIn: true,
};

const mapStateToProps = state => ({
  isMobile: getIsMobile(state),
  categories: getCategories(state),
});

const mapDispatchToProps = dispatch => ({
  detectResize: w => dispatch(screenResizeAction(w)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
