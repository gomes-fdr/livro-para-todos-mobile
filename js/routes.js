angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.pesquisaDeLivros', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pesquisaDeLivros.html',
        controller: 'pesquisaDeLivrosCtrl'
      }
    }
  })

  .state('menu.cadastroDeLivros', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cadastroDeLivros.html',
        controller: 'cadastroDeLivrosCtrl'
      }
    }
  })

  .state('menu.meusLivros', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meusLivros.html',
        controller: 'meusLivrosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.sobre', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobre.html',
        controller: 'sobreCtrl'
      }
    }
  })

  .state('menu.resultadoPesquisa', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/resultadoPesquisa.html',
        controller: 'resultadoPesquisaCtrl'
      }
    }
  })

  .state('menu.detalhesDoLivro', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalhesDoLivro.html',
        controller: 'detalhesDoLivroCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});