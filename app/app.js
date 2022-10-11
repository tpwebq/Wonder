var appCfg ={
    navRoutes:[        
        {navItem:true, path:"/",name:"Home",view:"app/views/index.html"},
        {navItem:true, path:"/conferences",name:"Conferences",view:"app/views/conferences.html"},
        {navItem:true, path:"/tips",name:"Tips",view:"app/views/tips.html"},
        {navItem:true, path:"/contact",name:"Contact",view:"app/views/contact.html"},
        {navItem:true, path:"/basket",name:"Basket",view:"app/views/basket.html"},
        {navItem:false, path:"/comingsoon",name:"Comingsoon",view:"app/views/comingsoon.html"},
        {navItem:false, path:"/privacy",name:"Privacy",view:"app/views/privacy.html"}  
    ],
    errRoute: {view:"app/views/error.html"}
};

angular.module("app",["ngRoute","ngSanitize"]);
angular.module("app")
.config(function($routeProvider) {
    for(var i=0;i<appCfg.navRoutes.length;i++){
        $routeProvider.when(appCfg.navRoutes[i].path,{templateUrl:appCfg.navRoutes[i].view});        
    }
    $routeProvider.otherwise({templateUrl:appCfg.errRoute.view});
});
angular.module("app").run(function($rootScope){
    $rootScope.navMenu = appCfg.navRoutes;
});