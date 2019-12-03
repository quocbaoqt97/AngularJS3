(function(){
  'use strict'
  angular.module('webapp',[])
  .controller('webbappcontroller',webbappcontroller);
webbappcontroller.$inject=['$scope','$filter'];
  function webbappcontroller($scope,$filter){
    $scope.amount_1 = 0;
    $scope.Displaymoney = function(){
      var amount_2 = 23100*($scope.amount_1);
      $scope.amount_2 = $filter('currency')(amount_2,"VND",3);
    }
  }
})();
