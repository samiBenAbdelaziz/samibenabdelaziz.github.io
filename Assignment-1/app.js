(function(){
'use strict';

  var app = angular.module('LunchCheck',[]);

  app.controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.foodList = "";
    
    $scope.checkFood = function(){
      var list = $scope.foodList.split(',');
      if (list.length === 1 && list[0]===""){
        $scope.message = "Please enter data first";
      }
      else if (list.length <= 3){
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    }

  };
})();