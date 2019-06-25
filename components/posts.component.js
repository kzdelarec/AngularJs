app.component('posts',{

    templateUrl:'./components/posts.template.html',
    controller:function($scope, PostsService, AuthenticationService){

        this.$onInit=function(){

            this.posts=PostsService.getPosts();

        };

        $scope.$on('init', (event, posts)=>{

            this.posts=PostsService.getPosts();
            console.log(this.posts);

        });



        this.user=AuthenticationService.getUser();

    },
    bindings:{
        post:'<',
        editable:'<'
    },
    controllerAs:'c'

});
