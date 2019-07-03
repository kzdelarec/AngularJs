class ProfesoriService {

    constructor($http, $rootScope){

        this.http=$http;
        this.rootScope = $rootScope;
        this.profesori = null;

    }

    getProfesore(){
        this.http.get('./server/profesori.php').then(d => {
            this.profesori=d.data;
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

            if (data.status===200){
                this.getProfesore();
                this.rootScope.$broadcast('dodanProfesor', this.profesori);
            } else {

                alert('Greška pri spremanju ustanove!');

            }

        });

    }
}

app.service('ProfesoriService', ProfesoriService);