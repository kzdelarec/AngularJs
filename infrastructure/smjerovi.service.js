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

            console.log("smjerovi.php?id=" + id)
            this.smjerovi=d.data;
            if(this.smjerovi.length != 0){
                console.log(this.smjerovi);
                let data = {
                    id:id,
                    ustanova: this.smjerovi[0].ustanova
                };

                this.rootScope.$broadcast('odabrano', data);
                this.rootScope.$broadcast('smjer', this.smjerovi);
            } else {
                this.getUstanovu(id);
            }

        });
    }

    getUstanovu(id) {
        this.http.get('./server/ustanove.php?idUstanove=' + id).then(d => {

            this.ustanove=d.data;
                console.log(this.smjerovi);
                let data = {
                    id:id,
                    ustanova: this.ustanove[0].naziv
                };

                this.rootScope.$broadcast('odabrano', data);
                this.rootScope.$broadcast('smjer', this.smjerovi);
        });
    }

    loadSmjerovi(id){
        return this.getSmjerovi(id);
    }

    unesiSmjer(smjer){

        this.http.post('server/smjerovi.php', {smjer:smjer}).then((data)=>{

            console.log(data);
            if (data.status===200){

                this.smjerovi.push({
                    naziv:smjer.naziv,
                    ustanova:smjer.ustanova
                });

            } else {

                alert('Greška pri spremanju smjera!');

            }

        });


    }

}

app.service('SmjeroviService', SmjeroviService);