angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BooksService', ['$http', function($http) {

	var service = this;

	this.get = function(fnOk, fnNOk) {
		service.getOnline(fnOk, fnNOk);
	};

	// Lendo da internet
	this.getOnline = function(fnOk, fnNOk) {
		$http({
			method: 'GET',
			url: 'bla'
		}).
		then(function(response) {
			fnOk(response.data);
		}, function(response) {
			service.getOffline(fnOk, fnNOk);

		});
	};

	// Lendo local
	this.getOffline = function (fnOk, fnNOk) {
		$http({
			method: 'GET',
			url: 'data/books.json'
		}).
		then(function(response){
			fnOk(response.data);
		}, function(response) {
			fnNOk(true);
		});
	};
}]);

