app.component('korisnik',{

    templateUrl:'./components/korisnici/korisnik.template.html',
    controller:function(Korisniciservice){


        this.delete=function(id){
            Korisniciservice.obrisiKorisnika(id);

        };

        this.update=function(korisnik){
            Korisniciservice.transfer(korisnik);
        };


    },
    bindings:{
        korisnik:'<'
    },
    controllerAs:'c'

});