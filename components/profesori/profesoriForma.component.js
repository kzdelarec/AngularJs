app.component('profesoriForma',{

    templateUrl:'./components/profesori/profesoriForma.template.html',
    controller:function($scope, AuthenticationService, SmjeroviService, UstanoveService, RoleService, ProfesoriService){

        this.user=AuthenticationService.getUser();
        this.ustanove = null;
        this.smjerovi = null;
        this.titule = null;

        this.$onInit=function(){
            this.ustanove = UstanoveService.loadUstanove();
            this.smjerovi = SmjeroviService.getSviSmjerovi();
            this.titule = RoleService.loadRole();
        };

        $scope.$on('init', (event, ustanove)=>{
            this.ustanove = UstanoveService.loadUstanove();
        });

        $scope.$on('initRole', (event, titule)=>{
            this.titule = titule.filter(function (item) {
                if(item.description === "profesor" || item.description==="asistent") return true;
            });
        });

        $scope.$on('smjer', (event, smjerovi)=>{
            this.smjerovi = smjerovi;
        });

        this.profesor = {
            ime:"",
            prezime:"",
            ustanova:"",
            roleId:"",
            titula:"",
            smjer:"",
            smjerId:"",
            idUstanova:""
        };

        $scope.$on('odabir', (event, data)=>{

            let ustanove = this.ustanove.filter(function (item) {
                if(item.idUstanove == data.idUstanova) return true;
            });
            let smjerovi = this.smjerovi.filter(function (item) {
                if(item.idSmjera == data.smjerId && item.idUstanove == data.idUstanova) return true;
            });

            if(smjerovi.length<1){
                this.profesor.smjer="";
                this.profesor.smjerId="";
            }

            this.profesor.idUstanova=data.idUstanova;
            this.profesor.smjerId = data.smjerId;

            if(ustanove.length > 0){
                this.profesor.ustanova=ustanove[0].naziv;
            }

            if(smjerovi.length > 0){
                this.profesor.smjer=smjerovi[0].naziv;
            }

        });

        this.unesi=function(){

            let id = this.profesor.roleId;
            let titula = this.titule.filter(function (item) {
                if(item.roleid==id) return true;
            });
            this.profesor.titula = titula[0].description;
            console.log(this.profesor);
            ProfesoriService.unesiProfesora(this.profesor);

        };

    },

    controllerAs:'c'

});
