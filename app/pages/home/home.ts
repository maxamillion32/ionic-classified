import {Page, NavController} from 'ionic-angular';
import {OnInit} from 'angular2/core';

import {PostPage} from './../post/post'
import {ProfilePage} from './../profile/profile'
import {ListPage} from './../list/list'

import {PostService, postItem} from './../../services/PostService'

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

	_postPage = PostPage;
	_profilePage = ProfilePage;
	_listPage = ListPage;
	public ads : Array<postItem>= null;

	constructor(public nav: NavController, private _postService : PostService) {

  	}
	
	ngOnInit() {
        this.ads = this._postService.getAds();
    }

  	gotoPage(page) {
		this.nav.push(page);
	}
}
