angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {

$scope.place = mainSrv.getId($stateParams.id);

    
})