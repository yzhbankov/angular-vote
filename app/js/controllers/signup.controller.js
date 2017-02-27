/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */
app.controller('signupCtrl', ['$scope', '$http', 'Auth', function signupCtrl($scope, $http, Auth) {
    console.log(Auth.getAuthData());
    $scope.showDetails = false;
    console.log($scope.author);
    $scope.submit = function (username, email, password) {
        if (!$scope.author) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/signup',
                params: {user: username, email: email, password: password}
            }).then(function successCallback(response) {
                if (response.data) {
                    $scope.showDetails = true;
                }

                $scope.author = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        } else {
            $scope.showDetails = true;
        }
    };
}]);