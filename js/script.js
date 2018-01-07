angular
  .module('calculator', [])
  .controller('calcCtrl', calcCtrl);

function calcCtrl($scope) {
  // variables
  var num;

  $scope.resultNumber = 0;
  $scope.previousNumber = 0;

  $scope.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  $scope.operators = ["+", "-", "x", "/"];
  $scope.op = '';
  $scope.previousOp;
  $scope.currentNumber = 0;

  $scope.numbers.reverse();
  // displays numbers on the screen
  $scope.display = [];

  $scope.all = [];

  // input methods
  $scope.takeInput = function(model) {
    $scope.display.push(model);
    for (var i = 0; i <= $scope.display.length; i++) {
      if (i > 8) {
        $scope.currentNumber =
          parseInt($scope.display.slice(0, 8)
            .join()
            .replace(/,/g, ''));
        alert('max reached please use an operator');
      } else {
        $scope.currentNumber =
          parseInt($scope.display
            .join()
            .replace(/,/g, ''));
      }
    }
    $scope.resultNumber = $scope.currentNumber;

  }
  $scope.cleaner = function() {
      $scope.resultNumber = 0;
      $scope.display = [];
      $scope.op = '';
      $scope.all = [];
    }
    // math method

  $scope.takeOperator = function(model) {
    $scope.all.push($scope.currentNumber);
    $scope.all.push(model);
    

    
    
      switch ($scope.op) {
        case "+":
          
          $scope.resultNumber += $scope.previousNumber;
          //
          break;
        case "-":
                    
          
      $scope.resultNumber = $scope.previousNumber - $scope.resultNumber;
          break;
        case "x":
          
          $scope.resultNumber *= $scope.previousNumber;
          break;
        case "/":
          
         $scope.resultNumber = $scope.previousNumber / $scope.resultNumber;
          break;
      }

      $scope.op = model;
    $scope.previousNumber = $scope.resultNumber;
      $scope.display = [];
    }
  $scope.equals = function() {
 
  $scope.takeOperator();
}

   

}

$scope.equals = function() {
  
  $scope.resultNumber;
}


$scope.cleaner = function() {
  $scope.resultNumber = 0;
  $scope.display = [];
}

}
