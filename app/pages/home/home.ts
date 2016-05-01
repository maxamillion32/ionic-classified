import {Page, NavController} from 'ionic-angular';

import {PostPage} from './../post/post'
import {ProfilePage} from './../profile/profile'
import {ListPage} from './../list/list'

import {PostService} from './../../services/PostService'

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

	_postPage = PostPage;
	_profilePage = ProfilePage;
	_listPage = ListPage;

	constructor(public nav: NavController, private _postService : PostService) {

  	}

  	gotoPage(page) {
		this.nav.push(page);
	}
}
