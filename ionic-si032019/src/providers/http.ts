import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpProvider {
    public url : string;
    public token : string;

    //private const TIMEOUT : number = 15000;

    constructor(){
        this.url = null;
        this.token = null;
    }
    public get(){

    }
    public post(obj : any){

    }
    public put(obj : any){

    }
    public delete(obj : any){

    }
}