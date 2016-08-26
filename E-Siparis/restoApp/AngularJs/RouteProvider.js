app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'BaseController',
        templateUrl: 'main.html'
        
       
    })
           .when('/checkout', {
               controller: 'OrderController',
               templateUrl: 'orderlist.html'


           })
    .when('/detail/:showFood?', {
        controller: 'DetailController',
        templateUrl: 'detail.html'
    })
    .otherwise({ redirectTo: '/' });
});