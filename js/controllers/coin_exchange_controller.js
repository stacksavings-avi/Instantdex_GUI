'use strict';

Instandex.controller('CoinExchangeController', function($scope, $state){
    $scope.combinedor1by1 = false;
    $scope.switchToCombinedOr1By1 = function(){
        if($scope.combinedor1by1){
            $state.go('coin_exchange1by1');
        }
        else{
            $state.go('coin_exchange');
        }
    }
});