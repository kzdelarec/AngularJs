app.component('ustanove',{

    templateUrl:'./components/ustanove/ustanove.template.html',
    controller:function($scope,AuthenticationService, UstanoveService){

        this.$onInit=function(){

            this.ustanove=UstanoveService.loadUstanove();

        };

        $scope.$on('init', (event, posts)=>{

            this.ustanove=UstanoveService.loadUstanove();
            console.log(this.ustanove);

        });

        $scope.$on('added', (event, posts)=>{

            this.ustanove=UstanoveService.loadUstanove();
            console.log(this.ustanove);

        });



        this.user=AuthenticationService.getUser();

    },
    bindings:{
        ustanova:'<',
        editable:'<'
    },
    controllerAs:'c'

});
