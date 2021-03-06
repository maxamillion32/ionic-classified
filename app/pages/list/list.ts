import {Page, NavController} from 'ionic-angular';
import {OnInit} from 'angular2/core';

import {PostService} from './../../services/PostService';
import {DetailPage} from './../detail/detail'

@Page({
	templateUrl: 'build/pages/list/list.html'
})
export class ListPage {

	_detailPage = DetailPage;
	ads = [];
	
	constructor(private _postService: PostService, public nav: NavController) {
	
	}

	ngOnInit() {

		console.log(this.ads[0]);
        this.ads = this._postService.getAds();  
    }
		
	showItem(ad) {
		console.log('You selected:', ad);
        this.nav.push(DetailPage, { ad: ad });
    }

    deleteItem(ad) {
    	for(let i = 0; i < this.ads.length; i++) {
	      if(this.ads[i]._id == ad._id){
	        this._postService.deleteItem(ad);
	        this.ads.splice(i, 1);
	      }
	    }     
    }

    
}
