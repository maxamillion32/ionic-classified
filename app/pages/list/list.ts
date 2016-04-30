import {Page} from 'ionic-angular';

@Page({
	templateUrl: 'build/pages/profile/profile.html'
})
export class Profile {

	public profile = {
		picture: 'images/anis-Shamshuddin-Socialmosaic.jpg',
		firstName: 'Anis',
		lastName: 'Anis',
		title: 'Anis',
		phone: '021-366-4777',
		mobilePhone: '0334-3853136',
		email: 'anis_momin@hotmail.com',
	};

	constructor() {

	}
}
