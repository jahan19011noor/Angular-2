import {Component} from 'angular2/core'

@Component({
    selector: 'ngForm-directive',
    templateUrl: 'app/ngform-directive.component.html'
})

export class NgFormDirectiveComponent {
    log(x)
    {
        console.log(x);
    }
    onSubmit(form){
        console.log(form);//comes along only when submit is successful
        //which means when all fields are valid
    }
}