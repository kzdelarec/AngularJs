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

    getSmjerovi(id){
        this.http.get('./server/smjerovi.php?id=' + id).then(d => {

            this.smjerovi=d.data;
            if(this.smjerovi.length != 0){
                let data = {
                    id:id,
                    ustanova: this.smjerovi[0].ustanova
                };

                this.rootScope.$broadcast('odabrano', data);
                this.rootScope.$broadcast('smjer', this.smjerovi);
            }

        });
    }

    loadSmjerovi(id){
        return this.getSmjerovi(id);
    }

    transfer(data){
        this.rootScope.$broadcast('odabrano', data);
    }

    unesiSmjer(smjer){

        this.http.post('server/smjerovi.php', {smjer:smjer}).then((data)=>{

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