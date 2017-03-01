/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */

app.controller('mainCtrl', ['$scope', '$http', 'Auth', function mainCtlr($scope, $http, Auth) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/'

    }).then(function successCallback(response) {
        console.log(response.data)
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
    $scope.showUser = false;
    console.log(Auth.getAuthData());
    $scope.$watch(Auth.getAuthData(), function (newValue, oldValue) {
        console.log(1111111);
        //console.log(newValue + ' ' + oldValue);
        //console.log(Auth.getAuthData().authorised);
    });
    $scope.Auth = Auth.getAuthData();


}]);
