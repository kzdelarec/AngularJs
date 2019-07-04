app.component('ocjena',{

    templateUrl:'./components/ocjene/ocjena.template.html',
    controller:function(AuthenticationService, OcjeneService){
        
        this.ocjeni=function () {
            this.ocjena.idSt = AuthenticationService.getUser().id;
            OcjeneService.unesiOcjenu(this.ocjena,AuthenticationService.getUser());
        }

    },
    bindings:{
        ocjena:'<'
    },
    controllerAs:'c'

});