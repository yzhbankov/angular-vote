/**
 * Created by Iaroslav Zhbankov on 27.02.2017.
 */
app.factory('Auth', ['$http', function ($http) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/'
    }).then(function successCallback(response) {
        console.log(response.data)
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    var data = {
        authorised: false,
        username: ''
    };

    return {
        getAuthData: function () {
            return data;
        },
        setAuthData: function (authorised, username) {
            data.username = username;
            data.authorised = authorised;
        }
    };
}]);