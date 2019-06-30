class Korisniciservice {

    constructor($http, $rootScope){

        this.http=$http;
        this.rootScope = $rootScope;
        this.korisnici = null;

        this.http.get('./server/korisnici.php').then(d => {

            this.korisnici=d.data;
            console.log(this.korisnici);
            this.rootScope.$broadcast('init');
        });
    }

    reloadKorisnike(){
        this.http.get('./server/korisnici.php').then(d => {

            this.korisnici=d.data;
            console.log(this.korisnici);
            this.rootScope.$broadcast('reload', this.korisnici);
        });
    }

    loadKorisnike(){
        return this.korisnici;
    }

    transfer(data){
        this.rootScope.$broadcast('odabir', data);
    }

    obrisiKorisnika(id){
        console.log("server/korisnici.php?delete=1&id="+id);
        this.http.get('server/korisnici.php?delete=1&id='+id).then((data)=>{

            console.log(data);
            if (data.status===200){
                this.reloadKorisnike();
            } else {

                alert('Greška pri spremanju ustanove!');

            }

        });

    }

    urediKorisnika(korisnik){

        this.http.post('server/korisnici.php',{put:1, korisnik:korisnik}).then((data)=>{
            debugger;
            console.log(data);
            if (data.status===200){
                this.reloadKorisnike();
            } else {

                alert('Greška pri spremanju ustanove!');

            }

        });

    }
}

app.service('Korisniciservice', Korisniciservice);