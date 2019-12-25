import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import ReactResizeDetector from 'react-resize-detector';
import PropTypes from 'prop-types';

import { recursivelyCreateRoutes, routes, publics, createListRoutes } from './routes';
import materialTheme from './materialTheme';
import './shared.scss';
import { screenResizeAction } from './redux/app/actions';
import { getIsMobile } from './redux/app/selectors';
import { getCategories, getCurrentList } from './redux/categories/selectors';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper';
import LoggedOutWrapper from './Components/LoggedOutWrapper/LoggedOutWrapper';
import FourOhFour from './Pages/404';

const App = ({ detectResize, isMobile, loggedIn, categories, list }) => {
  return (
    <React.Fragment>
      <ReactResizeDetector handleWidth onResize={w => detectResize(w)} />
      <MuiThemeProvider theme={materialTheme}>
        <BrowserRouter>
          {loggedIn ? (
            <ContentWrapper isMobile={isMobile}>
              <Switch>
                {recursivelyCreateRoutes(categories)}
                {recursivelyCreateRoutes(routes)}
                {createListRoutes(categories)}
                <Route component={FourOhFour} />
              </Switch>
            </ContentWrapper>
          ) : (
            <LoggedOutWrapper>
              <Switch>
                {recursivelyCreateRoutes(publics)}
                <Route component={FourOhFour} />
              </Switch>
            </LoggedOutWrapper>
          )}
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool,
  detectResize: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  categories: PropTypes.shape().isRequired,
};

App.defaultProps = {
  loggedIn: true,
};

const mapStateToProps = state => ({
  isMobile: getIsMobile(state),
  categories: getCategories(state),
  list: getCurrentList(state),
});

const mapDispatchToProps = dispatch => ({
  detectResize: w => dispatch(screenResizeAction(w)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
