yatta.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'SomethingController',
				templateUrl: 'app/partials/main.html'
			})
		.when('/iedata',
			{
				controller: 'SomethingController',
				templateUrl: 'app/partials/iedata.html'
			})
		.otherwise({redirectTo: '/'});
});
