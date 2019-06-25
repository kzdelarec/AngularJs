app.component('smjeroviPage',{

    templateUrl:'./pages/page-smjerovi.template.html',
    controller:function($state,AuthenticationService){

        if (!(AuthenticationService.getUser().role==="administrator")) {
            $state.go('main');
        }
    },
    controllerAs:'c'

});