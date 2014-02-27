timeAngle.factory('Somethings', function () {
	var factory = {};

	factory.get = function () {
		var somethings = JSON.parse(localStorage.getItem('somethings') || '[]');
		return somethings;
	};
	factory.add = function (data) {
		var somethings = JSON.parse(localStorage.getItem('somethings') || '[]');
		if ($.inArray(data, somethings) < 0) {
			somethings.push(data);
			localStorage.setItem('somethings', JSON.stringify(somethings));
		}
	};

	return factory;
});
