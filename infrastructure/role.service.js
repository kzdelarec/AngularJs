class RoleService {

    constructor($http, $rootScope){

        this.http=$http;
        this.rootScope = $rootScope;
        this.role = null;

        this.http.get('./server/role.php').then(d => {

            this.role=d.data;
            this.rootScope.$broadcast('initRole', this.role);
        });
    }

    loadRole(){
        return this.role;
    }

}

app.service('RoleService', RoleService);