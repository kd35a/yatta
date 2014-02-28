yatta.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'SomethingController',
				templateUrl: 'app/partials/main.html'
			})
		.otherwise({redirectTo: '/'});
});
