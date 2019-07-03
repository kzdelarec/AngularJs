app.component('main', {

    template:`
        <ocjene></ocjene>
       
    `,
    controller:function($http, $state, AuthenticationService){

        if (!AuthenticationService.isAuthenticated()) {
            $state.go('login');
        }

        if(AuthenticationService.getUser().role=="administrator"){
            $state.go('profile');
        }

    },
    controllerAs:'c'

});