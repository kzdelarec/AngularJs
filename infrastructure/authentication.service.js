class AuthenticationService {

    constructor($http, $state, $rootScope){

        this.http=$http;
        this.user=null;
        this.state=$state;
        this.rootScope=$rootScope;
        this.ustanove = null;
        this.smjerovi = null;
    }

    isAuthenticated(){

        let auth=false;

        if (this.user!=null || sessionStorage.getItem('authenticated')=="true") auth=true;
        if (auth) this.user=JSON.parse(sessionStorage.getItem('user'));

        return auth;

    }

    getUser(){
        return this.user;
    }

    login(credentials){


        this.http.post('./server/login.php',credentials).then(d => {

            console.log(d.data[0]);

            if (d.data[0].status=='ok'){

                this.user=d.data[0];
                sessionStorage.setItem('authenticated',true);
                sessionStorage.setItem('user',JSON.stringify(d.data[0]));
                this.state.go('main');


            }

            else {

                alert('Wrong credentials');

            }

        });

    }

    logout(){

        sessionStorage.removeItem('authenticated');
        sessionStorage.removeItem('user');
        this.user=null;
        this.state.go('login');

    }

    register(credentials){

        this.http.post('server/register.php', {user:credentials}).then((data)=>{


            if (data.data[0].status=='ok'){

                this.state.go('login');

            } else {

                alert('Error while registering');

            }

        });


    }

}

app.service('AuthenticationService', AuthenticationService);

