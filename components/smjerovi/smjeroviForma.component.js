app.component('smjeroviForma',{

    templateUrl:'./components/smjerovi/smjeroviForma.template.html',
    controller:function($scope, AuthenticationService, SmjeroviService, UstanoveService){

        this.user=AuthenticationService.getUser();

        this.$onInit=function(){
            this.ustanove = UstanoveService.loadUstanove();
        };

        $scope.$on('init', (event, ustanove)=>{
            this.ustanove = UstanoveService.loadUstanove();
        });

        this.smjer = {
            naziv:"",
            ustanovaId:"",
            ustanova:""
        };
        this.smjer.ustanovaId="bla";

        $scope.$on('odabrano', (event, data)=>{
            this.smjer.ustanovaId=data.id;
            let ustanove = this.ustanove.filter(function (item) {
                if(item.idUstanove == data.id) return true;
            });

            this.smjer.ustanova = ustanove[0].naziv;
            console.log(this.smjer.ustanovaId);

        });

        $scope.$on('smjerDodano', (event, status)=>{
            if(status == true){
                this.smjer.naziv=""
            }
        });

        this.unesi=function(){
            SmjeroviService.unesiSmjer(this.smjer);
        };

    },

    controllerAs:'c'

});
