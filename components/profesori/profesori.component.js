app.component('profesori',{

    templateUrl:'./components/profesori/profesori.template.html',
    controller:function($scope, AuthenticationService, UstanoveService, SmjeroviService, ProfesoriService, RoleService){


        this.$onInit=function(){

            this.ustanove = UstanoveService.getUstanove();
            this.smjerovi = SmjeroviService.getSviSmjerovi();
            this.profesori = ProfesoriService.getProfesore();
            this.role = RoleService.loadRole();

        };

        $scope.$on('init', (event, data)=>{
            this.ustanove=UstanoveService.loadUstanove();
            this.profesori = ProfesoriService.loadProfesore();
        });

        this.getSmjerovi = function(){
            this.smjerovi = SmjeroviService.loadSmjerovi($scope.c.ustanova.idUstanove);
            return this.smjerovi;
        };

        $scope.$on('smjer', (event, smjerovi)=>{
            this.smjerovi = smjerovi;
        });

        $scope.$on('dodanProfesor', (event, profesori)=>{
            this.profesori = profesori;
        });


        this.user=AuthenticationService.getUser();

    },
    bindings:{
        profesor:'<'
    },
    controllerAs:'c'

});

app.filter('filterProfesora', function (ProfesoriService) {

    return function(profesori, idS, idU) {
        if(idS == undefined && idU == undefined){
            return profesori;
        }

        let izlaz = [];
        let data={
            smjerId:idS,
            idUstanova:idU
        };

        if(idS == undefined){
            profesori.forEach(function (prof) {
                if(prof.idUstanove===idU){
                    izlaz.push(prof);
                }
            });
        } else {
            profesori.forEach(function (prof) {
                if(prof.idUstanove==idU && prof.idS == idS){
                    izlaz.push(prof);
                }
            });
        }

        if(data != undefined){
            ProfesoriService.transfer(data);
        }

        return izlaz;
    }
});
