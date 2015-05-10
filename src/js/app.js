var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

/**
 * Needed for onTouchTap events in Material-UI
 */
require("react-tap-event-plugin")();

/**
 * Required Components
 */
var Auth = require('./components/AuthView');
var Template = require('./components/Template');
var NavBar = require('./components/NavBar');

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <NavBar />
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route name="home" path="/" handler={App}>
    <Route name="auth" path="/auth" handler={Auth} />
    <Route name="template" path="/template" handler= {Template} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});