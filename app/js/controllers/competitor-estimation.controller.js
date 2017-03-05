/**
 * Created by Iaroslav Zhbankov on 05.03.2017.
 */
app.controller('ServiceCtrl', ['$scope', 'Data', function ($scope, Data) {
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
        var customerEstimationSum = estimate.reduce(function (a, b) {
            return a + b;
        });

        $('[data-weight]').each(function (index) {
            $(this).text(Math.round(100 * Data.getExpertsData().experts[index] / Data.getExpertsData().sum) / 100);
        });

        console.log(estimate);

        $('[data-customer]').each(function (index) {
            $(this).text(Math.round(10 * estimate[index] / customerEstimationSum) / 10);
        });

        Data.getExpertsData();
    }
}]);
