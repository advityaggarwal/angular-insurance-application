import {Component} from 'angular2/core';    //header files to include class and Component
import {loginComponent} from './login/login.component'; 
import {HTTP_PROVIDERS} from 'angular2/http';
import {loginService} from './login/login.service';
import {questionComponent} from './questions/questions.component';
import {questionService} from './questions/question.service'
import 'rxjs/Rx';

//metadata
@Component({
    selector: 'pm-app',     //name of the tag
    template: `{{pageTitle}}
    <hr>
    <app-login></app-login>`,       //inserted another tag inside the app component
    directives: [loginComponent],      //tells that this component can be used in the angularJS
    providers:[HTTP_PROVIDERS,loginService,questionService]

})

//class
export class AppComponent {
    
    pageTitle:string="Insurance"
}
