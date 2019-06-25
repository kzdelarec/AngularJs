app.component('stars',{

    templateUrl:'./components/stars.template.html',
    controller:function($scope, PostsService, AuthenticationService){
        this.click = function (id, rate) {

            console.log(id + " - " + rate);
        }
    },
    bindings:{
        id:'<',
    },
    controllerAs:'c'

});