app.component('ocjene',{

    templateUrl:'./components/ocjene/ocjene.template.html',
    controller:function($scope, PostsService, AuthenticationService){

        this.$onInit=function(){
            this.ocjene=PostsService.getPosts();
        };

        $scope.$on('init', (event, posts)=>{
            this.ocjene=PostsService.getPosts();
        });



        this.user=AuthenticationService.getUser();

    },
    bindings:{
        post:'<',
        editable:'<'
    },
    controllerAs:'c'

});
