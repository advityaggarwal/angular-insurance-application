import {Injectable} from 'angular2/core'
import {Http,Response} from 'angular2/http';
import {IQues} from './question';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class questionService
{
    
    constructor(private _http:Http)
    {

    }
    getQuestions(x:string):Observable<IQues[]>
    {
        return this._http.get(`api/questions/${x}.json`).map((response:Response)=><IQues[]>response.json()).do(data=> console.log("All:" +JSON.stringify(data)));
    }
}