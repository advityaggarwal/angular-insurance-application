import {Component,Input} from 'angular2/core'

@Component({
    selector:'calculator',
    templateUrl:'app/calculator/calculator.component.html'
})

export class calculatorComponent{

    @Input() ans:number;

    @Input() answer:string[];


    
}
