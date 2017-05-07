import {Component} from 'angular2/core';

@Component({
    selector: 'bootstrap-panel',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                {{ header }}
            </div>
            <div class="panel-body">
                {{ bodytext }}
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <ng-content select=".heading"></ng-content>
            </div>
            <div class="panel-body">
                <ng-content select=".body"></ng-content>
            </div>
        </div>
    `
})
export class BootstrapPanelComponent { }