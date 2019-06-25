app.component('profesoriPage',{

    templateUrl:'./pages/page-profesori.template.html',
    controller:function($state,AuthenticationService){

        if (!(AuthenticationService.getUser().role==="administrator")) {
            $state.go('main');
        }
    },
    controllerAs:'c'

});