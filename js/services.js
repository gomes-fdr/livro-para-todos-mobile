angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('bookService', ['$http', function($http){
	var books = new Firebase("https://radiant-torch-668.firebaseio.com/books");
	
	var myDataRef = new Firebase("https://radiant-torch-668.firebaseio.com/books");

	return {
		getBooks: function(){

			myDataRef.on("value", function(snap){
				console.log(snap.val());
			}); 



			return $http.get("https://radiant-torch-668.firebaseio.com/books").then(function(response){
				books = response;
				return books;
			});
		}
	}

}]);

