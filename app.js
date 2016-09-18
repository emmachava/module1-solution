(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "";
  $scope.msgPlaceHolder = "";

  $scope.checkItems = function() {
    if ($scope.lunchItems == "") {
      $scope.msgPlaceHolder = "Please enter data first";
    }
    else {
      $scope.msgPlaceHolder = splitString($scope.lunchItems,",")
    }
  }

  function splitString(items, separator) {
    var totalItems = items.split(separator);
    return totalItems.length <=3 ? "Enjoy!" : "Too much!";
  }
}

})();
