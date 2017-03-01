/**
 * Created by Iaroslav Zhbankov on 27.02.2017.
 */
app.factory('Auth', function () {
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
});