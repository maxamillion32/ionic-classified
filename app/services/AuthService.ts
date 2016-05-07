import {Injectable} from 'angular2/core';
import {NavController} from 'ionic-angular';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


export class IUser {
    username: string;
    email: string;
    password: string;
}

@Injectable()
export class AuthService {

    public isLoggedin = false;
    private ApiUrl = 'http://localhost:3333';

    constructor(private http: Http, private navcontroller: NavController) {

    }

    login(user) {
        
        var headers = new Headers();
        
        var creds = "username=" + user.username + "&password=" + user.password;
        
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
            return new Promise(resolve => {
            
                this.http.post(this.ApiUrl+'/authenticate', creds, {headers: headers}).subscribe(data => {
                
                if(data.json().success){
                    window.localStorage.setItem('raja', data.json().token);
                    this.isLoggedin = true; 
                }   

                resolve(this.isLoggedin);
                    
            }); 
            
        });    
    }


    register(user ) {
        
        return new Promise(resolve => {
        var creds = "username=" + user.username + "&password=" + user.password+ "&email=" + user.email;
      
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(this.ApiUrl+'/adduser', creds, {headers: headers}).subscribe(data => {
           if(data.json().success)
               resolve(true);
            else
                resolve(false);
    
        });    
        });
        
    }
    
    logout() {
        this.isLoggedin = false;
        window.localStorage.clear();
    }

}

