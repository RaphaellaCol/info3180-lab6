app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Cereal", "Icecream","Melon"];
	$scope.addItem = function () {
		$scope.errortext = "";
        if (!$scope.add) {return;}
        if ($scope.products.indexOf($scope.add) == -1) {
            $scope.products.push($scope.add);
        } else {
            $scope.errortext = "Error, duplicate item!";
        }
    } 
	$scope.removeItem = function (x) {
		$scope.products.splice(x, 1);
	}
});