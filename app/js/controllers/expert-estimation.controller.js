/**
 * Created by Iaroslav Zhbankov on 01.03.2017.
 */
app.controller('ExpertCtrl', ['$scope', 'Data', function ($scope, Data) {
    $scope.experts = {
        expert: 1,
        availableOptions: [
            {id: 'expert-1', name: '1'},
            {id: 'expert-2', name: '2'},
            {id: 'expert-3', name: '3'},
            {id: 'expert-4', name: '4'},
            {id: 'expert-5', name: '5'},
            {id: 'expert-6', name: '6'}
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
        var sqrSum = 0;
        $('input').each(function (index) {
            arr.push({id: $(this).attr('data-num'), expert: $(this).attr('data-expert'), value: $(this).val()})
        });
        for (var i = 0; i < 10; i++) {
            var temp = 0;
            for (var j = 0; j < $scope.experts.expert; j++) {
                arr.forEach(function (item, index) {
                    if ((Number(item.expert) == j + 1) && (Number(item.id) == i + 1)) {
                        temp += Number(item.value);
                    }
                });
            }
            estimate.push(temp);
        }
        Data.setExpertsData(estimate);

        var average = estimate.reduce(function (a, b) {
                return a + b;
            }) / 10;

        $('[data-rang]').each(function (index) {
            $(this).text(estimate[index]);
        });
        $('[data-average]').each(function (index) {
            $(this).text(Math.round((estimate[index] - average) * 100) / 100);
        });

        $('[data-sqrt]').each(function (index) {
            var item = Math.round((estimate[index] - average) * 100) / 100;
            var itemPow = Math.round(Math.pow(item, 2) * 100) / 100;
            sqrSum += itemPow;
            $(this).text(itemPow);
        });

        var result = Math.round(100 * 12 * sqrSum / (Math.pow($scope.experts.expert, 2) * (990))) / 100;
        if (result > 0.5) {
            $('[data-result]').text(result + ' - Степень согласованности мнений экспертов удовлетворительна, в мерах повышения нет необходимости.');
        } else {
            $('[data-result]').text(result + ' - Степень согласованности мнений экспертов неудовлетворительна, необходимо предпринять меры по ее повышению.');
        }
    }
}]);