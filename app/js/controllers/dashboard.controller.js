/**
 * Created by Iaroslav Zhbankov on 01.03.2017.
 */
app.controller('DashboardCtrl', ['$scope', 'Data', '$location', 'Auth', function ($scope, Data, $location, Auth) {
    if (!Auth.getAuthData().authorised) {
        $location.path('/signin');
    }

}]);