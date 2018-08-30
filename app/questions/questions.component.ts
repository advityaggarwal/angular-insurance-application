import {Component,Input ,OnInit} from 'angular2/core';
import {questionService} from './question.service';
import { IQues } from './question';
import {calculatorComponent} from '../calculator/calculator.component'

@Component({
    selector: 'app-ques',
    templateUrl: 'app/questions/questions.component.html',
    directives:[calculatorComponent]
})


export class questionComponent implements OnInit{
    ques:string="";
    options:string[];
    answer:string[]=[];
    booleanSample:boolean=false;
    ngOnInit():void{
        alert("Welcome");
        this._questionService.getQuestions("Types").subscribe(options=>this.options=options[0].options,error=>this.booleanSample=true);
        this._questionService.getQuestions("Types").subscribe(question=>this.ques=question[0].ques,error=>this.booleanSample=true);

    }
    
    onChange(filename:string)
    {
        this.answer.push(filename);
        this._questionService.getQuestions(filename).subscribe(options=>{this.options=options[0].options;this.ques=options[0].ques},error=>this.algorithm());

    }
    mul:number;
    ans:number;
    algorithm():void{
        if(this.answer[2]=="SUV")
        {
            this.mul=2;
        }
        else{
            this.mul=5;
        }
        this.ans=(1000*2*this.mul);
        this.booleanSample=true;
    }

    constructor(private _questionService:questionService)
    {

    }

    
        

}