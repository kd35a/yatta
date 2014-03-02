/*
 * Somethings factory
 *
 * Just a useless factory to get started with AngularJS
 */
yatta.factory('Somethings', function () {
	var factory = {};
	var storageTag = 'somethings';

	factory.get = function () {
		var somethings = JSON.parse(localStorage.getItem(storageTag) || '[]');
		return somethings;
	};
	factory.add = function (data) {
		var somethings = JSON.parse(localStorage.getItem(storageTag) || '[]');
		if ($.inArray(data, somethings) < 0) {
			somethings.push(data);
			localStorage.setItem(storageTag, JSON.stringify(somethings));
			return true;
		} else {
			return false;
		}
	};
	factory.clearAll = function () {
		localStorage.setItem(storageTag, '[]');
	};

	return factory;
});
