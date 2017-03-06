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

}]);