'use strict';

var app = angular.module('pokeApp', ['ui.router', 'ngLoadingSpinner']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/html/home.html',
        controller: 'homeCtrl'
    }).state('page', {
        url: '/page/:id',
        templateUrl: '/html/page.html',
        controller: 'pageCtrl'
    }).state('detail', {
        url: '/detail/:id',
        templateUrl: '/html/detail.html',
        controller: 'detailCtrl'
    });
    
    $urlRouterProvider.otherwise('/');
});