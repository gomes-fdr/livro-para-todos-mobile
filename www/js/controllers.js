angular.module('app.controllers', [])
  
.controller('resultadoPesquisaCtrl', ['$scope', '$http', 'BooksService',function($scope, $http, BooksService) {
	$scope.isOnline = false;
	$scope.listaLivros = {
		books: []
	};

	$scope.titulo_filtro='';

	$scope.pesquisaLivro = function() {
		$scope.titulo_filtro = $scope.titulo;

		console.log("titulo_filtro: " + $scope.titulo_filtro);


		BooksService.get(function ok(data){
			$scope.listaLivros = data;
			$scope.isOnline = true;
		}, function nok(erro){
			if(erro) {
				console.log('Não consegui coletar os livros');
			}

		});
	};


}])
   
.controller('cadastroDeLivrosCtrl', function($scope) {

})
   
.controller('meusLivrosCtrl', function($scope) {

})
      
.controller('sobreCtrl', function($scope) {

})
   
.controller('pesquisaDeLivrosCtrl', function($scope) {

})
   
.controller('detalhesDoLivroCtrl', function($scope) {

});
 