app.component('korisniciPage',{

    templateUrl:'./pages/page-korisnici.template.html',
    controller:function($state,AuthenticationService){

        if (!(AuthenticationService.getUser().role==="administrator")) {
            $state.go('main');
        }
    },
    controllerAs:'c'

});