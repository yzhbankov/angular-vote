/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */
app.controller('signupCtrl', ['$scope', '$http', 'Auth', '$window', function signupCtrl($scope, $http, Auth, $window) {
    $scope.showDetails = false;
    $scope.submit = function (username, email, password) {
        if (!$scope.author) {
            $http({
                method: 'POST',
                url: 'https://competiotion-e.herokuapp.com/signup',
                params: {user: username, email: email, password: password}
            }).then(function successCallback(response) {
                if (response.data) {
                    $scope.showDetails = true;
                }
                $scope.author = response.data;
                $window.localStorage['username'] = response.data;
                $window.localStorage['success'] = true;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        } else {
            $scope.showDetails = true;
        }
    };
}]);