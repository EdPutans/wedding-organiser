import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import ReactResizeDetector from 'react-resize-detector';
import PropTypes from 'prop-types';

import { recursivelyCreateRoutes, routes } from './routes';
import materialTheme from './materialTheme';
import './shared.scss';
import { screenResizeAction } from './redux/app/actions';
import { getIsMobile } from './redux/app/selectors';
import { getCategories } from './redux/categories/selectors';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper';
import UnderConstruction from './Pages/UnderConstruction';

const result = [];
const App = ({ detectResize, isMobile, loggedIn, categories }) => {
  recursivelyCreateRoutes(routes, result);
  recursivelyCreateRoutes(categories, result);

  return (
    <React.Fragment>
      {/* DO NOT TOUCH THE NESTING OF COMPONENTS HERE!!!! */}
      <ReactResizeDetector handleWidth onResize={w => detectResize(w)} />
      <MuiThemeProvider theme={materialTheme}>
        {/* {loggedIn ? ( */}
        <BrowserRouter>
          <Switch>
            <ContentWrapper isMobile={isMobile}>
              {result}
              {/* // add a 404!! */}
            </ContentWrapper>
          </Switch>
        </BrowserRouter>
        {/* ) : ( */}
        {/* <LoggedOutWrapper> */}
        {/* <PublicRoutes /> */}
        {/* </LoggedOutWrapper> */}
        {/* )} */}
        {/* </Switch> */}
      </MuiThemeProvider>
    </React.Fragment>
  );
};

App.propTypes = {
  detectResize: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
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
