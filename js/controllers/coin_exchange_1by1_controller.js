'use strict';

Instandex.controller('CoinExchange1By1Controller', function($scope, $state){
    $scope.combinedor1by1 = true;
    $scope.switchToCombinedOr1By1 = function(){
        if($scope.combinedor1by1){
            $state.go('coin_exchange1by1');
        }
        else{
            $state.go('coin_exchange');
        }
    }
});