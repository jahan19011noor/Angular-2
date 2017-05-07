import {Component, Input} from 'angular2/core';
import {BootstrapPanelComponent} from './bootstrap.panel.component'

// inserting content of another component into the template of this component

@Component({
    selector: 'content',
    template: `
        <h3>Bootstrap Panel template or DOM Element imported from bootstrap.panel.component</h3>
        <bootstrap-panel [header]="headcontent" [bodytext]="bodycontent">
            // problem data binding not happening
            <div class="heading">This is the heading</div>
            <div class="body">this is the body</div>
            <div class="body">this is the body</div>
            <!--both body placed into one div the body div of the panel-->
        </bootstrap-panel>
    `,
    directives: [BootstrapPanelComponent]
})
export class ContentComponent {
    @Input() headcontent = "this is the heading"
    @Input() bodycontent = "This is the body content"
}