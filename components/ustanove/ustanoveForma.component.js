app.component('ustanoveForma',{

    templateUrl:'./components/ustanove/ustanoveForma.template.html',
    controller:function($scope, AuthenticationService, UstanoveService){

        this.user=AuthenticationService.getUser();

        this.unesi=function(){

            console.log(this.ustanova);
            UstanoveService.unesiUstanovu(this.ustanova);

        };

    },

    controllerAs:'c'

});
