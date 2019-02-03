import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";



@Injectable()
export class ServerService {
    constructor(private http: Http){}

    storeServes(servers: any[]){
        const headers = new Headers({'Content-Type': 'application/json'});
        /* return this.http.post('https://udemy-ng-http-cbbe7.firebaseio.com/data.json', servers, {headers: headers}); */
        return this.http.put('https://udemy-ng-http-cbbe7.firebaseio.com/data.json', servers, {headers: headers});
    }

    getServers(){
        return this.http.get('https://udemy-ng-http-cbbe7.firebaseio.com/data.json').
        map((res: Response) => {
            const data = res.json();
            for(const server of data){
                server.name = 'Fetched_' + server.name;
            }
            return data;
        }).catch((err: Response) => {
            console.log(err);
            return Observable.throw(err);
        });
    }

    getAppName(){
        return this.http.get('https://udemy-ng-http-cbbe7.firebaseio.com/data/appName/appName.json').map((response: Response) => {
            const data = response.json();
            return data;
        }).catch((err) => {
            return Observable.throw(err);
        });
    }
}