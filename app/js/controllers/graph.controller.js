/**
 * Created by Iaroslav Zhbankov on 05.03.2017.
 */
app.controller('GraphCtrl', ['$scope', 'Data', '$location', 'Auth', function ($scope, Data, $location, Auth) {
    if (!Auth.getAuthData().authorised) {
        $location.path('/signin');
    }
    var ctx = document.getElementById("myChart").getContext("2d");

    var data = {
        labels: ["Скорость получения услуги",
            "Доверие",
            "Привлекательность тарифов",
            "Цена – качество",
            "Объем страхового покрытия",
            "Размер франшизы",
            "Количество услуг",
            "Степень учета рисков",
            "Простота норм договора",
            "Быстрота, качество и справедливость"],
        datasets: [
            {
                label: "Конкурент",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)'
                ],
                borderWidth: 1,
                data: Data.getCompetitorsData()
            }, {
                label: "Компания",
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
                data: Data.getCustomersData()
            }
        ]
    };

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {}
    });


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
    //console.log(Data.getCustomersData());
    //console.log(Data.getCompetitorsData());
}]);