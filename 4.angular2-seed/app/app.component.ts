// Chapter 3 starts

//directives, dependency injection, services, components

// @Component({
//     selector: 'my-app',
//     template: '<h1>NO NO NO</h1>' +
//     '<courses></courses>' +
//     '<authors></authors>',
//     directives: [CoursesComponent, AuthorsComponent]
// })


//types of property binding

// @Component({
//     selector: 'my-app',
//     template: `
//         <h1>{{ title }}</h1>
//         <img src="{{ imgUrl }}" alt="">
//         <img [src]="imgUrl" alt="">
//         <img bind-src="imgUrl" alt="">
//         <!--3 ways to property binding or interpolation-->
//     `
// })

//class binding and style binding
// @Component({
//     selector: 'my-app',
//     template: `
//             <!--class binding-->
//             <!--<button class="btn btn-primary" [class.active]="isActive">Submit</button>-->
//             <button
//                 class="btn btn-primary"
//                 [style.backgroundColor]="isActive ? 'blue' : 'gray'">
//                     Submit
//             </button>
//         `
// })

//Event Bindings: 2 syntax
//paranthesis
//prefix
//event bubbling up
//preventing bubbling
// @Component({
//     selector: 'my-app',
//     template: `
//         <div (click)="onDivClick()">
//             <button class="btn btn-primary" (click)="onClick($event)">Submit</button>
//             <!--<button class="btn btn-primary" on-click="onClick($event)">Submit</button>        -->
//         </div>
//         `
// })
//
// export class AppComponent {
//     onClick($event)
//     {
//         $event.stopPropagation();
//         alert("clicked!" + $event);
//     }
//     onDivClick(){
//         alert("Handled by div");
//     }
// }

//Component property to DOM Property Binding
//DOM property to Component Binding
//ngModel(two-way binding)
// @Component({
//     selector: 'my-app',
//     template: `
//         <!--//DOM to Component-->
//         <input type="text" value="{{ title }}" (input)="title = $event.target.value"/>
//
//         <!--//Two way binding handled by ngModel Directive-->
//         <input type="text" [(ngModel)]="title">
//         <input type="text" bindon-ngModel="title">
//
//         <!--//Component to DOM-->
//         <input type="button" (click)="title = ''" value="Clear">
//         Preview: {{ title }}
//         `
// })
//
// export class AppComponent {
//     title = "Angular App";
// }

//Exercise

// @Component({
//     selector: 'my-app',
//     template: `
//         <i
//             class="glyphicon"
//             [class.glyphicon-star-empty]="!isFavorite"
//             [class.glyphicon-star]="isFavorite"
//             (click)="onclick()"
//         ></i>
//     `
// })
//
// export class AppComponent {
//     isFavorite = true;
//
//     onClick(){
//         this.isFavorite = !this.isFavorite;
//     }
// }


// Chapter 3 ends

//Chapter 4 Starts

// import {Component} from 'angular2/core';
// import {FavoriteComponent} from './favorite.component';
//
// @Component({
//     selector: 'my-app',
//     template: `
//         <i class="glyphicon glyphicon-star"></i>
//         <favorite is-favorite="{{ post.isFavorite }}" (change)="onFavoriteChange($event)"></favorite>
//     `,
//     directives: [FavoriteComponent]
// })
//
// export class AppComponent{
//     post = {
//         title: "Title",
//         isFavorite: true
//     }
//
//     onFavoriteChange($event){
//         console.log($event);
//     }
// }

//Chapter 4 Exercise



//mydoing
// @Component({
//     selector: 'my-app',
//     template:`
//         <i class="glyphicon glyphicon-heart" (click)="onClick()"
//         [style.background-color]="likes == 11 ? 'pink' : 'gray'"></i>
//         <span>{{ likes }}</span>
//     `
// })
//
// export class AppComponent{
//
//     likes = 10;
//
//     onClick(){
//         if(this.likes == 10)
//         {
//             this.likes = 11;
//         }
//         else{
//             this.likes = 10;
//         }
//     }
//
// }

//mydoing

//tutorialDoing
import {LikeComponent} from './like.component';
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
    `,
    directives: [LikeComponent]
})

export class AppComponent
{
    tweet = {
        totalLikes: 10,
        iLike: false
    }
}
//tutorialDoing

// import {Component} from 'angular2/core';
// import {VoteComponent} from './vote.component'
//
// @Component({
//     selector: 'my-app',
//     template: `
//         <vote
//             [totalVotes]="vote.totalVotes"
//             [myVote]="vote.myVote">
//         </vote>
//     `,
//     directives: [VoteComponent]
// })
//
// export class AppComponent
// {
//     vote = {
//         totalVotes: 10,
//         myVote: 0
//     }
// }