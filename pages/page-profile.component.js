app.component('profile',{
   templateUrl:'./pages/page-profile.template.html' ,
    controller:function(AuthenticationService){

        this.$onInit=function(){

            this.user=AuthenticationService.getUser();

        }


    },
    controllerAs:'c'

});