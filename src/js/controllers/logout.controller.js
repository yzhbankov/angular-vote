/**
 * Created by Iaroslav Zhbankov on 27.02.2017.
 */
app.controller('logoutCtrl', ['$window', 'Auth', function logoutCtrl($window, Auth) {
    $window.localStorage.removeItem('username');
    $window.localStorage.removeItem('success');
    Auth.setAuthData(false, '');
    console.log(Auth);
}]);
