app.component('smjerovi',{

    templateUrl:'./components/smjerovi/smjerovi.template.html',
    controller:function($scope, AuthenticationService, UstanoveService, SmjeroviService){

        this.$onInit=function(){

            this.ustanove=UstanoveService.loadUstanove();

        };

        $scope.$on('init', (event, posts)=>{

            this.ustanove=UstanoveService.loadUstanove();
            console.log(this.ustanove);

        });


        this.getSmjerovi = function(){
            this.smjerovi = SmjeroviService.loadSmjerovi($scope.c.ustanova);
            return this.smjerovi;
        };

        $scope.$on('smjer', (event, smjerovi)=>{
            this.smjerovi = smjerovi;
            console.log("broadcast:");
            console.log(this.smjerovi);
        });


        this.user=AuthenticationService.getUser();

    },
    bindings:{
        smjer:'<'
    },
    controllerAs:'c'

});
