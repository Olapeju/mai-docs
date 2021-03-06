import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Dashboard from './home/Dashboard.jsx';
import AllDocuments from './document/AllDocuments.jsx';
import ManageDocument from './document/ManageDocument.jsx';
import ViewDocument from './document/ViewDocument.jsx';
import AllUsers from './home/AllUsers.jsx';
import UpdateProfile from './home/UpdateProfile.jsx';
import NotFound from './static/NotFound.jsx';
import requireAuth from '../utils/requireAuth.js';
import requireAdminAuth from '../utils/requireAdminAuth.js';

const routes = <Route path="/" component={App}>
  <IndexRoute component={Login} />
  <Route path="/login" component={Login} />
  <Route path="/signup" component={Signup} />
  <Route path="/dashboard" component={requireAuth(Dashboard)} />
  <Route path="/documents" component={requireAuth(AllDocuments)} />
  <Route path="/document" component={requireAuth(ManageDocument)} />
  <Route path="/document/:id" component={requireAuth(ManageDocument)} />
  <Route path="/document/view/:id" component={requireAuth(ViewDocument)} />
  <Route path="/users" component={requireAdminAuth(AllUsers)} />
  <Route path="/user/:id" component={requireAuth(UpdateProfile)} />
  <Route path="/*" component={NotFound} />
</Route>;


/**
 * Declare and define all routes in the application
 * @class Routes
 * @extends {Component}
 */
class Routes extends Component {

  /**
   * Renders the view of the component
   * @returns {Object} react component to render
   * @memberOf Routes
   */
  render() {
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}

export default Routes;
