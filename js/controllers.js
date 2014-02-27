timeAngle.controller('SomethingController', function ($scope, Somethings) {
	$scope.somethings = Somethings.get();

	$scope.addSomething = function () {
		if (Somethings.add($scope.newSomething.data)) {
			$scope.somethings = Somethings.get();
			$('#newSomethingDataContainer').removeClass('has-error');
			$scope.newSomething.data = '';
			$scope.addSomethingForm.$setPristine();
		} else {
			$('#newSomethingDataContainer').addClass('has-error');
		}
	};
});
