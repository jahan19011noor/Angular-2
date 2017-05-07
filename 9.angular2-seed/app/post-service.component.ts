import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'post-service',
    template: `
        <div class="container">
            <h5>get() - > getting resource</h5>
            <h5>post() - > creating resource</h5>
            <h5>put() - > updating a complete resource object</h5>
            <h5>patch() - > updating part of a resource object</h5>
            <h5>delete() - > deleting resource</h5>
            <h5>head() - > getting meta-data of the resource</h5>
        </div>
    `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class PostServiceComponent {
    constructor(private _postService: PostService){
        this._postService.getPosts()
            .subscribe(posts => console.log(posts));
    }
}