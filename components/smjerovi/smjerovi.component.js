app.component('smjerovi',{

    templateUrl:'./components/smjerovi/smjerovi.template.html',
    controller:function($scope, AuthenticationService, UstanoveService, SmjeroviService){

        this.$onInit=function(){

            this.ustanove=UstanoveService.loadUstanove();
            this.smjerovi = SmjeroviService.getSviSmjerovi();
        };

        $scope.$on('init', (event, posts)=>{

            this.ustanove=UstanoveService.loadUstanove();
            console.log(this.ustanove);

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
