/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */

app.controller('mainCtrl', ['$scope', 'Auth', function mainCtlr($scope, Auth) {
    $scope.showUser = false;
    console.log(Auth.getAuthData());
    $scope.$watch(Auth.getAuthData(), function (newValue, oldValue) {
        console.log(1111111);
        //console.log(newValue + ' ' + oldValue);
        //console.log(Auth.getAuthData().authorised);
    });
    $scope.Auth = Auth.getAuthData();


}]);
