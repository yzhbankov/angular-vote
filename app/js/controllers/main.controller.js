/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */

app.controller('mainCtrl', ['$scope', 'Auth', function mainCtlr($scope, Auth) {
    $scope.Auth = Auth.getAuthData();
}]);
