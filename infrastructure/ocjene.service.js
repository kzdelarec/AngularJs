class OcjeneService {

    constructor($http, $rootScope, AuthenticationService){

        this.http=$http;
        this.rootScope = $rootScope;
        this.ocjeneProf = null;
        this.ocjeneStud = null;
        this.profesori = null;
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

    getBezOcjene(user){
        this.http.get('./server/ocjene.php?idU=' + user.idUstanove + "&idS=" + user.smjerId + "&idSt=" + user.id).then(d => {
            this.profesori=d.data;
            this.rootScope.$broadcast('init', this.profesori);
            return this.profesori;
        });
    }

    unesiOcjenu(ocjena, user){
        this.http.post('server/ocjene.php',{zapis:ocjena}).then((data)=>{
            if (data.status===200){
                this.getBezOcjene(user);
            } else {
                alert('Greška pri spremanju!');
            }

        });

    }

    urediOcjenu(ocjena, id){
        this.http.post('server/ocjene.php',{put:1, zapis:ocjena}).then((data)=>{
            if (data.status===200){
                this.getMojeOcjene(id);
            } else {
                alert('Greška pri spremanju ustanove!');
            }

        });

    }

    obrisiOcjenu(ocjena, id){
        this.http.get('server/ocjene.php?delete=1&id='+ocjena).then((data)=>{

            if (data.status===200){
                this.getMojeOcjene(id);
            } else {

                alert('Greška pri spremanju ustanove!');

            }

        });

    }


}

app.service('OcjeneService', OcjeneService);