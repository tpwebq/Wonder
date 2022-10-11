angular.module("app").component('appNavbar', {
    templateUrl: "app/components/navbar.html",
    controller: function($scope,$rootScope){
        $scope.navMenu = $rootScope.navMenu.filter((itm)=>{
            if(itm.navItem) return itm;
        });
    }
});