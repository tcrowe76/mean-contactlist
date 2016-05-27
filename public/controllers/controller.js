var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello from controller");
	$scope.greeting = "hello";

	var refresh = function() {
		$http.get('/contactlist').success(function(response) {
			console.log('controller got data');
			$scope.contactList = response;
			$scope.contact = "";
		});
	};

	refresh();

	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response) {
			console.log(response);
			refresh();
		});
	};
	
}]);

