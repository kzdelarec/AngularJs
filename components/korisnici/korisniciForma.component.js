app.component('korisniciForma',{

    templateUrl:'./components/korisnici/korisniciForma.template.html',
    controller:function($scope, AuthenticationService, SmjeroviService, UstanoveService, RoleService, Korisniciservice){

        this.user=AuthenticationService.getUser();
        this.ustanove = null;
        this.smjerovi = null;
        this.titule = null;

        this.$onInit=function(){
            this.ustanove = UstanoveService.loadUstanove();
            this.smjerovi = SmjeroviService.getSviSmjerovi();
            this.titule = RoleService.loadRole();
        };

        $scope.$on('init', (event, data)=>{
            this.ustanove = UstanoveService.loadUstanove();
            if(this.titule != undefined && this.titule != null){
                this.titule = this.titule.filter(function (item) {
                    if(item.description === "administrator" || item.description==="student") return true;
                });
            }
        });

        $scope.$on('initRole', (event, titule)=>{
            this.titule = titule.filter(function (item) {
                if(item.description === "administrator" || item.description==="student") return true;
            });
        });

        $scope.$on('smjer', (event, smjerovi)=>{
            this.smjerovi = smjerovi;
        });

        this.korisnik = {
            ime:"",
            prezime:"",
            ustanova:"",
            rId:"",
            email:"",
            smjer:"",
            idS:"",
            idUstanove:""
        };

        $scope.$on('odabir', (event, data)=>{

            this.korisnik.id = data.id;
            this.korisnik.ime = data.ime;
            this.korisnik.prezime = data.prezime;
            this.korisnik.rId = data.rId;
            this.korisnik.idS = data.idS;
            this.korisnik.idUstanove = data.idU;
            this.korisnik.email = data.email;
            this.korisnik.ustanova = data.ustanova;
            this.korisnik.smjer = data.smjer;

        });

        $scope.$on('profesorDodano', (event, status)=>{
            if(status == true){
                this.korisnik.ime="";
                this.korisnik.prezime="";
            }
        });

        this.uredi=function(){
            console.log(this.korisnik);
            Korisniciservice.urediKorisnika(this.korisnik);

        };

    },

    controllerAs:'c'

});
