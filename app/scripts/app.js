(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5mode({
                enabled: true,
                requireBase: false 
            });

        $stateProvider
            .state('home' {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: 'templates/home.html'
            });
    };


    angular
        .module('ngTodo', ['ui.router', 'firebase'])
        .config(config);
})();
