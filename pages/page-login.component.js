app.component('login',{

    templateUrl:'./pages/page-login.template.html',
    controller:function(AuthenticationService){

        this.login=function(){

            AuthenticationService.login(this.credentials);

        }
    },
    controllerAs:'c'

});