import {Component} from 'angular2/core';

@Component({
    selector: 'ng-switch',
    template: `
        <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map'"><a class="btn" (click)="viewMode = 'map'">Map Veiw</a></li>
            <li [class.active]="viewMode == 'list'"><a class="btn" (click)="viewMode = 'list'">List Veiw</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
            <template [ngSwitchWhen]="'list'">List View Content</template>
        </div>
    `
})
export class SwitchComponent {
    viewMode = 'map';
}