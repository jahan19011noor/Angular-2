import {Component} from 'angular2/core';
import {CustomPipe} from './custom.pipe';

@Component({
    selector: 'pipes',
    template: `
        {{ course.title | uppercase | lowercase}}
        <br/>
        {{ course.students | number }}
        <br/>
        {{ course.rating | number:'3.2-3' }}
        <br/>
        {{ course.price | currency:'AUD':true:'2.2-2' }}
        <br/>
        {{ course.releaseDate | date:'YYYY MMM DD'}}
        <br/>
        {{ course | json }}
        <br/><br/><br/>
        {{ post.title }}
        <br/>
        {{ post.body | summary }}
    `,
    pipes: [CustomPipe]
})
export class PipesComponent {
    course = {
        title: "Angular 2 for Beginners",
        rating: 4.9999,
        students: 55555,
        price: 99.87,
        releaseDate: new Date(2017, 3, 1)
    }
    post= {
        title: "Angular Tutorial for Beginners",
        body: `
            This is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for BeginnersThis is the body of the Antular Tutorials for Beginners
        `
    }
}