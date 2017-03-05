/**
 * Created by Iaroslav Zhbankov on 27.02.2017.
 */
app.factory('Auth', ['$window', function ($window) {
    var data = {
        authorised: $window.localStorage.getItem('success'),
        username: $window.localStorage.getItem('username')
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