'use strict';

var app = angular.module('pokeApp');

app.service('Pokemon', function($http) {
    this.getFirstPage = () => {
        return $http.get('http://pokeapi.co/api/v2/pokemon/');
    };

    this.getPage = page => {
        var limit = page * 20;

        return $http.get(`http://pokeapi.co/api/v2/pokemon/?limit=20&offset=${limit}`);
    };
    
    this.getPokemon = id => {
        return $http.get(`http://pokeapi.co/api/v2/pokemon/${id}/`);
    };
});