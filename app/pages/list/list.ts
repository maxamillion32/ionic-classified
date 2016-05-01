import {Page, NavController} from 'ionic-angular';
import {OnInit} from 'angular2/core';

import {PostService} from './../../services/PostService';
import {DetailPage} from './../detail/detail'

@Page({
	templateUrl: 'build/pages/list/list.html'
})
export class ListPage {

	ads = [];
	
	constructor(private _postService: PostService, public nav: NavController) {
	
	}


	ngOnInit() {
        this.ads = this._postService.getAds();  
    }
	

	showItem(id) {
		 this.nav.push(DetailPage, {
            id: id
        });
	}
}
