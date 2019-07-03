app.component('register',{
   templateUrl:'./pages/page-register.template.html' ,
    controller:function(AuthenticationService, UstanoveService, SmjeroviService, $scope){


        this.ustanove = UstanoveService.loadUstanove();
        this.smjerovi = null
        $scope.$on('init', (event, country)=>{
            this.ustanove = UstanoveService.loadUstanove();
        });

        this.getSmjerovi = function(){
            this.smjerovi = SmjeroviService.loadSmjerovi($scope.c.credentials.ustanova);
            return this.smjerovi;
        };

        $scope.$on('smjer', (event, smjerovi)=>{
            this.smjerovi = smjerovi;
        });

        this.register=function(){
            AuthenticationService.register(this.credentials);
        };

    },
    controllerAs:'c'

});