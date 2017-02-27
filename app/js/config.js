/**
 * Created by Iaroslav Zhbankov on 26.02.2017.
 */
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/signup', {
            templateUrl: 'js/views/signupview.html'
        })
        .when('/signin', {
            templateUrl: 'js/views/signinview.html'
        })
        .when('/logout', {
            templateUrl: 'js/views/homeview.html'
        })
        .when('/settings', {
            templateUrl: 'js/views/settingsview.html'
        });
});

