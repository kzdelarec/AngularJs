app.component('smjerovi',{

    templateUrl:'./components/smjerovi/smjerovi.template.html',
    controller:function($scope, AuthenticationService, UstanoveService, SmjeroviService){

        this.$onInit=function(){

            this.ustanove=UstanoveService.getUstanove();
            this.smjerovi = SmjeroviService.getSviSmjerovi();
        };

        $scope.$on('init', (event, ustanove)=>{
            this.ustanove=UstanoveService.loadUstanove();
        });

        this.transfer = function () {

            let data={
                id:this.ustanova.idUstanove
            };

            SmjeroviService.transfer(data);
        }


        this.getSmjerovi = function(){
            this.smjerovi = SmjeroviService.getSviSmjerovi();
            return this.smjerovi;
        };

        $scope.$on('smjer', (event, smjerovi)=>{
            this.smjerovi = smjerovi;;
        });


        this.user=AuthenticationService.getUser();

    },
    bindings:{
        smjer:'<'
    },
    controllerAs:'c'

});
