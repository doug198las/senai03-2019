import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpProvider {
    public url : string;
    public token : string;

    private TIMEOUT = 15000;

    constructor(){
        this.url = null;
        this.token = null;
    }

    private prepareHeaders(contentType : boolean){
        var headers = new Headers();
        headers.append('Accept', 'application/json');
    
        if (contentType){
          headers.append('Content-Type', 'application/json');
        }
    
        if (this.token == ''){
          this.token = null;
        }
    
        if (this.token != null){
          headers.append('Authorization', 'bearer ' + this.token);
        }
    
        return headers;
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