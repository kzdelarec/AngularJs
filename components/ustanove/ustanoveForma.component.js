app.component('ustanoveForma',{

    templateUrl:'./components/ustanove/ustanoveForma.template.html',
    controller:function($scope, AuthenticationService, UstanoveService){

        this.user=AuthenticationService.getUser();

        $scope.$on('ustanovaDodano', (event, status)=>{
            if(status == true){
                this.ustanova.naziv="";
                this.ustanova.adresa="";
                this.ustanova.oib="";
            }
        });

        this.unesi=function(){

            console.log(this.ustanova);
            UstanoveService.unesiUstanovu(this.ustanova);

        };

    },

    controllerAs:'c'

});
