app.component('smjer',{

    templateUrl:'./components/smjerovi/smjer.template.html',
    controller:function(PostsService){


        this.delete=function(id){

          PostsService.deletePost(id);

        };

        this.editing=false;

        this.edit=function(){

            this.editing=true;

        };

        this.doneEditing=function(){

            this.editing=false;

            PostsService.editPost(this.post.id, this.post.comment, new Date());

        };


    },
    bindings:{
        smjer:'<'
    },
    controllerAs:'c'

});