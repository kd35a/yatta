timeAngle.controller('SomethingController', function ($scope, Somethings) {
	$scope.somethings = Somethings.get();

	$scope.addSomething = function () {
		Somethings.add($scope.newSomething.data);
		$scope.somethings = Somethings.get();
	};
});
