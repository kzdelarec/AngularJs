app.component('ocjene',{

    templateUrl:'./components/ocjene/ocjene.template.html',
    controller:function($scope, OcjeneService, AuthenticationService){

        this.$onInit=function(){
            this.ocjene=OcjeneService.getBezOcjene(AuthenticationService.getUser());
        };

        $scope.$on('init', (event, ocjene)=>{
            this.ocjene=ocjene;
        });

        this.user=AuthenticationService.getUser();

    },
    bindings:{
        post:'<',
        editable:'<'
    },
    controllerAs:'c'

});
