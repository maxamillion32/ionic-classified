import {Page, NavController} from 'ionic-angular';
import {OnInit} from 'angular2/core';

import {PostPage} from './../post/post';
import {ProfilePage} from './../profile/profile';
import {ListPage} from './../list/list';
import {SearchPage} from './../search/search';
import {LoginPage} from './../login/login';

import {PostService, postItem} from './../../services/PostService';
import {AuthService} from './../../services/AuthService';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

	_postPage = PostPage;
	_profilePage = ProfilePage;
	_listPage = ListPage;
	_searchPage = SearchPage;

	public ads : Array<postItem>= null;

	constructor(public nav: NavController, private _postService : PostService, private _authService: AuthService) {

  	}
	
	ngOnInit() {
        this.ads = this._postService.getAds();
    }

  	gotoPage(page) {
		this.nav.push(page);
	}

	logout() {
	 	this._authService.logout();
	 	this.nav.setRoot(LoginPage);
	}
}
