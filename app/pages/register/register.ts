import {Page, NavController, NavParams} from 'ionic-angular';

//Services 
import {AuthService} from './../../services/AuthService';
import {HomePage} from './../home/home';
import {LoginPage} from './../login/login';

@Page({
	templateUrl: 'build/pages/register/register.html'
})
export class RegisterPage {
	
	public _homePage = HomePage;
	public _loginPage = LoginPage;
	public  creds = null;
	constructor(private nav: NavController, private _authService: AuthService) {
		this.creds = {
			username: '',
			email: '',
			password: ''
        }
	}

	register(creds){
		this._authService.register(creds).then(data => {
            if(data)
                this.nav.setRoot(this._homePage);
        });
	}

	gotoPage(page) {
		this.nav.push(page);
	}

}
