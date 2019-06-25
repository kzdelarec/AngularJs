app.component('main', {

    template:`
        <posts></posts>
       
    `,
    controller:function($http, $state, AuthenticationService){

        if (!AuthenticationService.isAuthenticated()) {
            $state.go('login');
        }

    },
    controllerAs:'c'

});