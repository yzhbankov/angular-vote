/**
 * Created by Iaroslav Zhbankov on 05.03.2017.
 */
app.controller('GraphCtrl', ['$scope', 'Data', function ($scope, Data) {
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
    console.log(Data.getCustomersData());
    console.log(Data.getCompetitorsData());
}]);