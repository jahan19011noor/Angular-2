import {Component} from 'angular2/core'
import {TweeterService} from './tweeter.service'
import {TweetComponent} from './tweet.component'

@Component({
    selector: 'ng-tweeter',
    template: `
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    providers: [TweeterService],
    directives: [TweetComponent]
})

export class TweeterComponent {
    tweets = [];

    constructor(tweeterService:TweeterService) {
        this.tweets = tweeterService.getTweets();
    }
}