import {Injectable} from 'angular2/core'
import {Http,Response} from 'angular2/http';
import {ILogin} from './login';
import {Observable} from 'rxjs/Observable'

@Injectable()

export class loginService
{
    private _loginUrl='api/login/login.json';

    constructor(private _http:Http)
    {

    }
    getLogins():Observable<ILogin[]>
    {
        return this._http.get(this._loginUrl).map((response:Response)=><ILogin[]>response.json());
    }
}