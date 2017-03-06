/**
 * Created by Iaroslav Zhbankov on 01.03.2017.
 */
app.controller('DashboardCtrl', ['$scope', 'Data', '$location', 'Auth', '$http', function ($scope, Data, $location, Auth, $http) {
    if (!Auth.getAuthData().authorised) {
        $location.path('/signin');
    }
    $http({
        method: 'GET',
        url: 'http://localhost:3000/problems',
        params: {user: Auth.getAuthData().username}
    }).then(function successCallback(response) {
        $scope.problems = response.data;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    $scope.redirect = function (title) {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/problem',
            params: {user: Auth.getAuthData().username, title: title}
        }).then(function successCallback(response) {
            console.log(response.data);
            Data.setTitle(response.data.title);
            Data.setCustomersData(response.data.customer.map(function(item){return Number(item)}));
            Data.setCompetitorsData(response.data.competitor.map(function(item){return Number(item)}));
            $location.path('/problem');
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

}]);