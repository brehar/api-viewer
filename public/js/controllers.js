'use strict';

var app = angular.module('pokeApp');

app.controller('homeCtrl', function($scope, Pokemon) {
    Pokemon.getFirstPage().then(res => {
        $scope.pokemon = res.data.results;
    });
});

app.controller('pageCtrl', function($scope, $state, Pokemon) {
    Pokemon.getPage($state.params.id).then(res => {
        $scope.pokemon = res.data.results;
        $scope.page = $state.params.id;
        $scope.nextPage = parseInt($state.params.id) + 1;
    });
});

app.controller('detailCtrl', function($scope, $state, Pokemon) {
    Pokemon.getPokemon($state.params.id).then(res => {
        $scope.details = res.data;
        $scope.pokeId = $state.params.id;
        $scope.moves = res.data.moves;
        $scope.abilities = res.data.abilities;
        $scope.heldItems = res.data.held_items;
    });
});

app.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});