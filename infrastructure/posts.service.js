class PostsService {

    constructor($http, DataService, $rootScope, AuthenticationService){

        this.http=$http;
        this.dataService=DataService;
        this.rootScope=$rootScope;
        this.user=AuthenticationService.getUser();

        this.dataService.getPosts().then((d)=>{

            this.posts=d.data;
            this.posts=this.posts.map(post => {post.id=Number(post.id); return post;});
            this.rootScope.$broadcast('init');

        });

    }

    getPosts(){

        return this.posts;

    }

    addPost(post){

        this.dataService.makePost(post).then(d => {

            this.posts.push({
                id:d.data[0].insertId,
                userId:this.user.id,
                username: this.user.username,
                comment: post.comment,
                timestamp: new Date()
            });

            this.rootScope.$broadcast('added');

            //broadcast da je adding false
            //new post - preko countryservice i data service
            //tako delete i edit
            //još dodati about

        });




    }

    deletePost(id){



        this.dataService.deletePost(id).then(d=>{

            let index=this.posts.findIndex(post => post.id==id);
            console.log(index);
            this.posts.splice(index,1);

        });

    }

    editPost(id, comment, timestamp){

        this.dataService.editPost(id, comment, timestamp).then(d=>{



        });


    }

   /*
    editCountry(country){

        this.dataService.editData(country).then(d=>{

            let i = this.countries.findIndex(c => c.id==country.id);
            this.countries[i]=country;
            this.rootScope.$broadcast('modeChange');

        });

    }*/

}

app.service('PostsService', PostsService);