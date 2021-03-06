import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Post} from './post';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PostService {
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){

    }

    getPosts() : Promise<Post[]>{
        return this._http.get(this._url)
            .map(res => res.json())
            .toPromise();
    }

    // createPost(post){
    createPost(post: Post){         //after adding type interface
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}