class OcjeneService {

    constructor($http, $rootScope){

        this.http=$http;
        this.rootScope = $rootScope;
        this.ocjeneProf = null;
        this.ocjeneStud = null;

    }

    getZapiseZaProfesore(id){
        this.http.get('./server/ocjene.php?prof=1&id=' + id).then(d => {
            this.ocjeneProf=d.data;
            this.rootScope.$broadcast('initOcjeneProf', this.ocjeneProf);
        });
    }

    getMojeOcjene(id){
        this.http.get('./server/ocjene.php?stud=1&id=' + id).then(d => {
            this.ocjeneStud=d.data;
            this.rootScope.$broadcast('initOcjeneStud', this.ocjeneStud);
        });
    }

}

app.service('OcjeneService', OcjeneService);