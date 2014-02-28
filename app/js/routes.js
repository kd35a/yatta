yatta.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'SomethingController',
				templateUrl: 'partials/main.html'
			})
		.when('/iedata',
			{
				controller: 'SomethingController',
				templateUrl: 'partials/iedata.html'
			})
		.otherwise({redirectTo: '/'});
});
