/**
 * Created by Iaroslav Zhbankov on 05.03.2017.
 */
app.controller('CompetitorCtrl', ['$scope', 'Data', '$location', 'Auth', function ($scope, Data, $location, Auth) {
    if (!Auth.getAuthData().authorised) {
        $location.path('/signin');
    }
    $scope.customers = {
        customer: 1,
        availableOptions: [
            {id: 'customer-1', name: '1'},
            {id: 'customer-2', name: '2'},
            {id: 'customer-3', name: '3'},
            {id: 'customer-4', name: '4'},
            {id: 'customer-5', name: '5'},
            {id: 'customer-6', name: '6'}
        ]
    };
    $scope.getNumber = function (num) {
        var arr = [];
        num = Number(num);
        for (var i = 0; i < num; i++) {
            arr.push(i + 1);
        }
        return arr;
    };
    $scope.submit = function () {
        var arr = [];
        var estimate = [];
        var competitorsAverageEstimation = [];
        $('input').each(function (index) {
            arr.push({id: $(this).attr('data-num'), customer: $(this).attr('data-client'), value: $(this).val()})
        });
        for (var i = 0; i < 10; i++) {
            var temp = 0;
            for (var j = 0; j < $scope.customers.customer; j++) {
                arr.forEach(function (item, index) {
                    if ((Number(item.customer) == j + 1) && (Number(item.id) == i + 1)) {
                        temp += Number(item.value);
                    }
                });
            }
            estimate.push(temp);
        }
        var competitorEstimationSum = estimate.reduce(function (a, b) {
            return a + b;
        });

        $('[data-customer]').each(function (index) {
            $(this).text(Data.getCustomersData()[index]);
        });

        $('[data-competitor]').each(function (index) {
            competitorsAverageEstimation.push(Math.round(10 * estimate[index] / $scope.customers.customer) / 10);
            $(this).text(Math.round(10 * estimate[index] / $scope.customers.customer) / 10);
        });

        Data.setCompetitorsData(competitorsAverageEstimation);
    }
}]);
