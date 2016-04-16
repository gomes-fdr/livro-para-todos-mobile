angular.module('app.controllers', [])
  
.controller('pesquisaDeLivrosCtrl', function($scope, bookService) {
	bookService.getBooks().then(function(books){
		// books é umarray de objetos livros
		
	});

})
   
.controller('cadastroDeLivrosCtrl', function($scope) {

})
   
.controller('meusLivrosCtrl', function($scope) {

})
      
.controller('sobreCtrl', function($scope) {

})
   
.controller('resultadoPesquisaCtrl', function($scope) {

})
   
.controller('detalhesDoLivroCtrl', function($scope) {

})
 