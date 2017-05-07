//Following are the life cycle hooks of a component
//to use them we need to implement their interfaces into the component
//each interface has a method that has to be added to the component

// * OnInit
// * OnDestroy
// * DoCheck
// * OnChanges
// * AfterContentInit
// * AfterContentChecked
// * AfterViewInit
// * AfterViewChecked

import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'static-type-checking',
    template: ``,
    providers: [PostService, HTTP_PROVIDERS]
})
export class StaticTypeCheckingComponent implements OnInit{
    constructor(private _postService: PostService){
        // this._postService.createPost(1);
        //the create post takes any type of parameter.
        //if a var has no type then it is set to type any in typescript
        // so we need to restrict the parameter type

        //so set the type using type annotation
        //have to do it in a seperate file
        this._postService.createPost({
            userId: 1,
            title: 'a',
            body: 'b'
        });
    }

    ngOnInit(){
        //this is the method of OnInit that we are implementing and overriding
        //the name has been prefixed with ng as in case of all other methods there

        //Method is called when the component is instantiated
        //so it is at the position "After the Constructor" in the life cycle

        //best practice to start work over here rather than in the constructor
        //so more the constructor code here
        this._postService.getPosts()
            // .subscribe(posts => console.log(posts));     //before type anotation
            .subscribe(posts => console.log(posts[0].body));    //after we can use indexing on posts[]
    }
}