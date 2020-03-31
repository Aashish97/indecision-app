"use strict";

console.log("App is running");

var appRoot = document.getElementById('app');

var template = React.createElement(
  "h1",
  null,
  "Indecision Apps"
);

ReactDOM.render(template, appRoot);
