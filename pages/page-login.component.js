app.component('login',{

    templateUrl:'./pages/page-login.template.html',
    controller:function(AuthenticationService, $scope){

        this.loginFailed=false;

        this.login=function(){

            AuthenticationService.login(this.credentials);

        }

        $scope.$on('loginFailed', (event, status)=>{

            this.loginFailed=status;

        });

    },
    controllerAs:'c'

});