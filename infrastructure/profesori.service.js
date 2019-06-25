class ProfesoriService {

    constructor($http, $rootScope){

        this.http=$http;
        this.rootScope = $rootScope;
        this.profesori = null;

        this.http.get('./server/profesori.php').then(d => {

            this.profesori=d.data;
            console.log(this.profesori);
            this.rootScope.$broadcast('init');
        });
    }

    loadProfesore(){
        return this.profesori;
    }

    transfer(data){
        this.rootScope.$broadcast('odabir', data);
    }

    unesiProfesora(profesor){

        this.http.post('server/profesori.php', {profesor:profesor}).then((data)=>{

            console.log(data);
            if (data.status===200){
                this.profesori.push({
                    ime:profesor.ime + " " + profesor.prezime,
                    titula:profesor.titula,
                    ustanova:profesor.ustanova,
                    smjer:profesor.smjer,
                    idS:profesor.smjerId,
                    idUstanove:profesor.idUstanova
                });
                this.rootScope.$broadcast('dodanProfesor', this.profesori);
            } else {

                alert('Greška pri spremanju ustanove!');

            }

        });

    }
}

app.service('ProfesoriService', ProfesoriService);