/**
 * Created by Iaroslav Zhbankov on 01.03.2017.
 */
app.controller('ExpertCtrl', ['$scope', function ($scope) {
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
            arr.push(i+1);
        }
        console.log(arr);
        return arr;
    };
    $scope.submit = function(){

    }
}]);