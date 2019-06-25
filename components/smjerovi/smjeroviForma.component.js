app.component('smjeroviForma',{

    templateUrl:'./components/smjerovi/smjeroviForma.template.html',
    controller:function($scope, AuthenticationService, SmjeroviService){

        this.user=AuthenticationService.getUser();

        this.smjer = {
            naziv:"",
            ustanovaId:"",
            ustanova:""
        };
        this.smjer.ustanovaId="bla";
        $scope.$on('odabrano', (event, data)=>{
            this.smjer.ustanovaId=data.id;
            this.smjer.ustanova=data.ustanova;
            console.log(this.smjer.ustanovaId);

        });

        this.unesi=function(){

            console.log(this.smjer);
            SmjeroviService.unesiSmjer(this.smjer);

        };

    },

    controllerAs:'c'

});
