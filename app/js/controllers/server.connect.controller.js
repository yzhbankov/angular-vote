/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */

app.controller('serverCtrl', ['$scope', '$http',function servrCtlr($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/test'

    }).then(function successCallback(response) {
        $scope.test = response;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
}]);
