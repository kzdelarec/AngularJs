app.component('navBar', {
    templateUrl:'./components/navbar/nav-bar.template.html',
    controller:function($state, AuthenticationService){

       this.getClass=function(c){
           if ($state.current.name==c) return 'active';
       };

       this.user=AuthenticationService.getUser();
       this.authenticated=AuthenticationService.isAuthenticated();

        this.$doCheck=function(){
           this.user=AuthenticationService.getUser();
           this.authenticated=AuthenticationService.isAuthenticated();
       };

       this.logout=function(){
           AuthenticationService.logout();
       }

    },
    controllerAs:'c'
});
