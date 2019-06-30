class UstanoveService {

    constructor($http, $state, $rootScope){

        this.http=$http;
        this.state=$state;
        this.rootScope = $rootScope;
        this.ustanove = null;
    }

    getUstanove(){
        this.http.get('./server/ustanove.php').then(d => {

            this.ustanove=d.data;
            console.log(this.ustanove);
            this.rootScope.$broadcast('init');
        });
    }

    refreshUstanove(){
        this.http.get('./server/ustanove.php').then(d => {

            this.ustanove=d.data;
            console.log(this.ustanove);
            this.rootScope.$broadcast('refreshUstanove', this.ustanove);
        });
    }

    loadUstanove(){
        return this.ustanove;
    }

    unesiUstanovu(ustanova){

        this.http.post('server/ustanove.php', {ustanova:ustanova}).then((data)=>{

            console.log(data);
            if (data.status===200){

                this.ustanove.push({
                    naziv:ustanova.naziv,
                    adresa:ustanova.adresa,
                    oib:ustanova.oib
                });

                this.refreshUstanove()

            } else {

                alert('Greška pri spremanju ustanove!');

            }

        });


    }
}

app.service('UstanoveService', UstanoveService);