/**
 * Created by Iaroslav Zhbankov on 27.02.2017.
 */
app.controller('logoutCtrl', ['$http', function logoutCtrl($http) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/logout'
    })
}]);
