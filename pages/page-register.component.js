app.component('register',{
   templateUrl:'./pages/page-register.template.html' ,
    controller:function(AuthenticationService, UstanoveService, SmjeroviService, $scope){


        this.ustanove = UstanoveService.loadUstanove();
        this.smjerovi = null
        $scope.$on('init', (event, country)=>{
            this.ustanove = UstanoveService.loadUstanove();
            console.log(this.ustanove);
        });

        this.getSmjerovi = function(){
            console.log("tu sam");
            this.smjerovi = SmjeroviService.loadSmjerovi($scope.c.credentials.ustanova);
            return this.smjerovi;
        };

        $scope.$on('smjer', (event, smjerovi)=>{
            this.smjerovi = smjerovi;
            console.log("broadcast:");
            console.log(this.smjerovi);
        });

        this.register=function(){

            console.log(this.credentials);
            AuthenticationService.register(this.credentials);

        };

    },
    controllerAs:'c'

});