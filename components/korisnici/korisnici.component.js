app.component('korisnici',{

    templateUrl:'./components/korisnici/korisnici.template.html',
    controller:function($scope, AuthenticationService, UstanoveService, SmjeroviService, Korisniciservice){


        this.$onInit=function(){

            this.ustanove = UstanoveService.loadUstanove();
            this.smjerovi = SmjeroviService.getSviSmjerovi();
            this.korisnici = Korisniciservice.loadKorisnike();

        };

        $scope.$on('init', (event, korisnici)=>{

            this.ustanove=UstanoveService.loadUstanove();
            this.korisnici = Korisniciservice.loadKorisnike();
        });

        this.getSmjerovi = function(){
            this.smjerovi = SmjeroviService.loadSmjerovi($scope.c.ustanova.idUstanove);
            return this.smjerovi;
        };

        $scope.$on('smjer', (event, smjerovi)=>{
            this.smjerovi = smjerovi;
        });

        $scope.$on('dodanKorisnik', (event, korisnici)=>{;
            this.korisnici = korisnici;
        });

        $scope.$on('reload', (event, korisnici)=>{
            this.korisnici = korisnici;
        });


        this.user=AuthenticationService.getUser();

    },
    bindings:{
        korisnik:'<'
    },
    controllerAs:'c'

});

app.filter('filterKorisnika', function (Korisniciservice) {

    return function(korisnici, idS, idU) {
        if(idS == undefined && idU == undefined){
            return korisnici;
        }

        let izlaz = [];
        let data={
            smjerId:idS,
            idUstanova:idU
        };

        if(idS == undefined){
            korisnici.forEach(function (usr) {
                if(usr.idU===idU){
                    izlaz.push(usr);
                }
            });
        } else {
            korisnici.forEach(function (usr) {
                if(usr.idU==idU && usr.idS == idS){
                    izlaz.push(usr);
                }
            });
        }

        if(data != undefined){
            Korisniciservice.transfer(data);
        }

        return izlaz;
    }
});
