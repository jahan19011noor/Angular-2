import {Component, Input} from 'angular2/core';

@Component({
    selector: 'vote',
    template: `
        <p><i class="glyphicon glyphicon-menu-up" (click)="onClickP()" [class.highlighted]="myVote == 1"></i></p>
        <p>{{ totalVotes }}</p>
        <p><i class="glyphicon glyphicon-menu-down" (click)="onClickN()" [class.highlighted]="myVote == -1"></i></p>
    `,
    styles: [`
        .glyphicon-meny-up, .glyphicon-menu-down {
            color: #ccc;
            cursor: pointer;
        }
        .highlighted {
            color: orange;
        }
    `]
})


export class VoteComponent {
    @Input() totalVotes = 10;
    @Input() myVote = 0;

    onClickP() {
        if(this.myVote == 0 || this.myVote == -1)
        {
            this.totalVotes += 1;
            this.myVote += 1;
        }
    }

    onClickN() {
        if(this.myVote == 0 || this.myVote == 1)
        {
            this.totalVotes -= 1;
            this.myVote -= 1;
        }
    }
}