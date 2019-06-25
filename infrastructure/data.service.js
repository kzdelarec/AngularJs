class DataService {

    constructor($http){

        this.http=$http;
        this.url='./server/posts.php';
    }

    getPosts(){

        return this.http.get(this.url);

    }

    makePost(post){


        return this.http.post(this.url, {post:post});

    }

    deletePost(id){

        return this.http.get(this.url+'?id='+id);

    }

    editPost(id, comment, timestamp, callback){

        return this.http.post(this.url, {put:true, post: {id:id, comment:comment, timestamp:timestamp}});

    }


}

app.service('DataService', DataService);