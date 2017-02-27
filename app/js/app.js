/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */
var app = angular.module('voteApp',['ngRoute'])
    .controller('sayhelloCtrl', ['$scope', function($scope) {
        $scope.greeting = 'Hola!';
    }]);

