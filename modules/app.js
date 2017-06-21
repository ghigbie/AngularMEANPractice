/* global angular */
angular.module('myApp', ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider.when('/', {
        template: '<h1>This is the MAIN page.</h1>'
    }).when('/about', {
        template: '<h1>The is the ABOUT page.</h1>'
    });
}
        