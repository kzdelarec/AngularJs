app.component('ustanovePage',{

    templateUrl:'./pages/page-ustanove.template.html',
    controller:function($state,AuthenticationService){

        if (!(AuthenticationService.getUser().role==="administrator")) {
            $state.go('main');
        }
    },
    controllerAs:'c'

});