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
    console.log('all:', $scope.all.join(' '));

    console.log('scope.op:', $scope.op);
    console.log('model:', model);
      switch ($scope.op) {
        case "+":
          //$scope.add(n1);
          $scope.resultNumber += $scope.previousNumber;
          //
          break;
        case "-":
                    console.log('subtract:', $scope.previousNumber, $scope.resultNumber);
          //$scope.subtract(n1);
      $scope.resultNumber = $scope.previousNumber - $scope.resultNumber;
          break;
        case "x":
          //$scope.multiply(n1);
          $scope.resultNumber *= $scope.previousNumber;
          break;
        case "/":
          //$scope.divide(n1);
         $scope.resultNumber = $scope.previousNumber / $scope.resultNumber;
          break;
      }

      $scope.op = model;
    $scope.previousNumber = $scope.resultNumber;
      $scope.display = [];
    }
  $scope.equals = function() {
  // can't even if this working at all...
  $scope.takeOperator();
}

    /*
    I'm pretty sure I don't need this $scope.different operands anymore if I well defined it in the switch case ...
      $scope.add = function() {
        alert('first num: ' +  $scope.resultNumber);
        num = $scope.currentNumber;

      */

}
/*
  $scope.subtract = function(n1, n2) {
    $scope.resultNumber =  $scope.number1 - $scope.number2;

    return $scope.resultNumber;
  }

  $scope.multiply = function(n1, n2) {
    $scope.number1 - $scope.number2;
     $scope.resultNumber = n1 * n2;
  }
  $scope.divide = function(n1, n2) {
     $scope.resultNumber = n1/n2;
  }

  $scope.equals = function(n1, n2) {
    ///alert('second num: ' + $scope.number2);
    //return $scope.resultNumber;

  }
  */

$scope.equals = function() {
  // can't if this working at all...
  $scope.resultNumber;
}

/*   do I even need this anymore if the switch function holds true???
  $scope.senseMind = function() {
    eval($scope.currentNumber + $scope.operators);
  }
*/

//this works, thank god...
$scope.cleaned = function() {
  $scope.resultNumber = 0;
  $scope.display = [];
}

//}
