/**
 * Created by Iaroslav Zhbankov on 05.03.2017.
 */
app.factory('Data', function () {
    var experts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var customers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var competitors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var title = '';
    return {
        getExpertsData: function () {
            var sum = experts.reduce(function (a, b) {
                return a + b;
            });
            return {
                experts: experts,
                sum: sum
            };
        },
        setExpertsData: function (data) {
            experts = data;
        },
        getCustomersData: function () {
            return customers;
        },
        setCustomersData: function (data) {
            customers = data;
        },
        getCompetitorsData: function () {
            return competitors;
        },
        setCompetitorsData: function (data) {
            competitors = data;
        },
        setTitle: function (data) {
            title = data;
        },
        getTitle: function () {
            return title;
        }
    };
});