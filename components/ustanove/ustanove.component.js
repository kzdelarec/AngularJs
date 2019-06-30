app.component('ustanove',{

    templateUrl:'./components/ustanove/ustanove.template.html',
    controller:function($scope,AuthenticationService, UstanoveService){

        this.$onInit=function(){
            this.ustanove=UstanoveService.getUstanove();
        };

        $scope.$on('init', (event, ustanove)=>{
            this.ustanove=UstanoveService.loadUstanove();
            console.log(this.ustanove);
        });

        $scope.$on('refresh', (event, ustanove)=>{
            this.ustanove=ustanove;
        });

        this.user=AuthenticationService.getUser();

    },
    bindings:{
        ustanova:'<'
    },
    controllerAs:'c'

});
