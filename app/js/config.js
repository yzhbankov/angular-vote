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
        .when('/expert-estimation', {
            templateUrl: 'js/views/expertEstimationView.html'
        })
        .when('/service-estimation', {
            templateUrl: 'js/views/serviceEstimationView.html'
        })
        .when('/competitor-estimation', {
            templateUrl: 'js/views/competitorEstimationView.html'
        })
        .when('/graph', {
            templateUrl: 'js/views/graphView.html'
        })
        .when('/settings', {
            templateUrl: 'js/views/settingsview.html'
        });
});

