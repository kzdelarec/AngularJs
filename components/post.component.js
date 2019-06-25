app.component('post',{

    templateUrl:'./components/post.template.html',
    controller:function(PostsService){

        this.click = function (id, rate) {

            console.log(id + " - " + rate);
        }

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
        post:'<',
        editable:'<'
    },
    controllerAs:'c'

});