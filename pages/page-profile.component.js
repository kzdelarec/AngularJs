app.component('profile',{
   templateUrl:'./pages/page-profile.template.html' ,
    controller:function(AuthenticationService, PostsService){

        this.$onInit=function(){

            this.user=AuthenticationService.getUser();
            this.posts=PostsService.getPosts();
            console.log(this.posts);

        }


    },
    controllerAs:'c'

});