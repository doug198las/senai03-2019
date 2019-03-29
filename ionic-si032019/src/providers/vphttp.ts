import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class VpHttpProvider {

  private TIMEOUT = 15000;

  public url: string;
  public accesstoken: string;
  public cache: boolean = true;  

  constructor(public http: Http) {
    this.url = null;
    this.accesstoken = null;
    this.cache = null;
  }

  private prepareHeaders(contentType : boolean){
    var headers = new Headers();
    headers.append('Accept', 'application/json');

    if (!this.cache) {
      headers.append('Cache-Control', 'no-cache');
    }

    if (contentType){
      headers.append('Content-Type', 'application/json');
    }

    if (this.accesstoken == ''){
      this.accesstoken = null;
    }

    if (this.accesstoken != null){
      headers.append('Authorization', 'bearer ' + this.accesstoken);
    }

    return headers;
  }

  post(object){
    var body : string = '';

    var headers = this.prepareHeaders(true);

    if (object != null && object != undefined){
      body = JSON.stringify(object);
    }

    return this.http.post(this.url, body, {headers: headers}).timeout(this.TIMEOUT).map((res : Response) => res.json());
  }

  put(object){
    var body : string = '';

    var headers = this.prepareHeaders(true);

    if (object != null && object != undefined){
      body = JSON.stringify(object);
    }

    return this.http.put(this.url, body, {headers: headers}).timeout(this.TIMEOUT);;
  }

  patch(object){
    var body : string = '';

    var headers = this.prepareHeaders(true);

    if (object != null && object != undefined){
      body = JSON.stringify(object);
    }

    return this.http.patch(this.url, body, {headers: headers}).timeout(this.TIMEOUT);;
  }

  get(){
    var headers = this.prepareHeaders(false);
    return this.http.get(this.url, {headers: headers}).timeout(this.TIMEOUT).map((res : Response) => res.json());
    //.do(f => {console.log(f)});
  }
}
