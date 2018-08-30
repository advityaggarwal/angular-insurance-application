import {Component,OnInit} from 'angular2/core';
import {ILogin} from './login'
import {loginService} from './login.service';
import {questionComponent} from '../questions/questions.component';

@Component({
    selector: 'app-login',
    templateUrl: 'app/login/login.component.html',
    directives:[questionComponent]
})


export class loginComponent implements OnInit
{
    username:string;
    password:string;
    logins:ILogin[];
    errorMessage:string;
    validate:boolean=true;

    ngOnInit():void{
        this._loginService.getLogins().subscribe(login=>this.logins=login,error=>this.errorMessage=error);
    }
        

    onLogin():void{
        for(let i=0;i<this.logins.length;i++)
        {
            if((this.username==this.logins[i].username)&&(this.password==this.logins[i].password))
            {
                console.log(this.username);
                this.validate=!this.validate;
                console.log(this.validate);
                
            }
        }
        
    }

    constructor(private _loginService:loginService)
    {

    }




}