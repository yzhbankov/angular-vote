/**
 * Created by Iaroslav Zhbankov on 27.02.2017.
 */

app.controller('signinCtrl', ['$scope', '$http', 'Auth', '$window', function signinCtrl($scope, $http, Auth, $window) {
    $scope.showDetails = false;
    $scope.submit = function (username, password) {
        if (!$scope.author) {
            $http({
                method: 'POST',
                //url: 'https://competiotion-e.herokuapp.com/signin',
                url: 'http://localhost:3000/signin',
                params: {user: username, password: password}
            }).then(function successCallback(response) {
                if (response.data.success) {
                    $scope.showDetails = true;
                    $scope.author = response.data.username;

                    Auth.setAuthData(true, $scope.author);

                    $window.localStorage['username'] = response.data.username;
                    $window.localStorage['success'] = true;
                }
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        } else {
            $scope.showDetails = true;
        }
    };
}]);
