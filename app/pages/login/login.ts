import {Page, NavController, NavParams} from 'ionic-angular';

import {AuthService} from './../../services/AuthService';
import {HomePage} from './../home/home';
import {RegisterPage} from './../register/register';

@Page({
	templateUrl: 'build/pages/login/login.html',
	providers: [AuthService]
})
export class LoginPage {

	public _homePage = HomePage;
	public _registerPage = RegisterPage;
	public usercreds = null;
	
	constructor(private nav: NavController, private _authService: AuthService) {
		this.usercreds = {
			username: '',
			password: '' 
		};
	}

	login(usercreds){
		this._authService.login(usercreds).then(data => {
            if(data)
                this.nav.setRoot(this._homePage);
        });
	}

	gotoPage(page) {
		this.nav.push(page);
	}

}
