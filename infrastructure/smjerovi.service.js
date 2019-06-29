class SmjeroviService {

    constructor($http, $rootScope){

        this.http=$http;
        this.rootScope = $rootScope;
        this.smjerovi = null;
        this.http.get('./server/smjerovi.php').then(d => {

            this.smjerovi=d.data;
            this.rootScope.$broadcast('init');

        });

    }

    getSviSmjerovi(){
        this.http.get('./server/smjerovi.php').then(d => {
            this.smjerovi=d.data;
            this.rootScope.$broadcast('smjer', this.smjerovi);
        });
    }

    transfer(data){
        this.rootScope.$broadcast('odabrano', data);
    }

    unesiSmjer(smjer){

        this.http.post('server/smjerovi.php', {smjer:smjer}).then((data)=>{

            console.log(data);
            if (data.status===200){

                this.smjerovi.push({
                    naziv:smjer.naziv,
                    ustanova:smjer.ustanova,
                    idUstanove: smjer.ustanovaId
                });

                this.rootScope.$broadcast('smjerDodano', true);
            } else {

                alert('Greška pri spremanju smjera!');

            }

        });


    }

}

app.service('SmjeroviService', SmjeroviService);