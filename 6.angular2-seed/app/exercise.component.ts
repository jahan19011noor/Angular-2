import {Component} from 'angular2/core'
import {FormExerciseComponent} from "./form-exercise.component";

@Component({
    selector: 'exercise',
    directives: [FormExerciseComponent],
    template: `
        <exercise-form></exercise-form>
    `
})

export class ExerciseComponent {

}