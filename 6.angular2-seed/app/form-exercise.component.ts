import {Component} from 'angular2/core'

@Component({
    selector: 'exercise-form',
    template: `        
        <form class="container" #f="ngForm" (ngSubmit)="onSubmit(f.form)">
            <div class="form-group">
                <label for="name">Name</label>
                <input
                        ngControl="name"
                        type="text"
                        id="name"
                        class="form-control"
                        #name="ngForm"
                        (change)="log(name)"
                        required
                        minlength="4">
                <div *ngIf="name.touched && name.errors">
                    <div
                            class="alert alert-danger"
                            *ngIf="name.errors.required">
                        Name is required
                    </div>
                    <div
                            class="alert alert-danger"
                            *ngIf="name.errors.minlength">
                        Name should be more than {{ name.errors.minlength.requiredLength }} characters.
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input
                        ngControl="email"
                        type="email"
                        class="form-control"
                        id="email"
                        #email="ngForm"
                        (change)="log(email)"
                        required
                        email>
                <div *ngIf="email.touched && email.errors">
                    <div
                            class="alert alert-danger"
                            *ngIf="email.errors.required">
                        Email is required
                    </div>
                </div>

            </div>
            <div class="form-group">
                <label for="freq">Frequency of Emails</label>
                <select 
                        id="freq" class="form-control">
                    <option value="volvo">Daily</option>
                    <option value="saab">Weekly</option>
                    <option value="mercedes">Montly</option>
                </select>
            </div>
            <button class="btn btn-primary" [disabled]="!f.valid">Submit</button>
        </form>
    `
})

export class FormExerciseComponent {
    log(x){
        console.log(x);
    }
    onSubmit(form){
        console.log(form);
    }
}