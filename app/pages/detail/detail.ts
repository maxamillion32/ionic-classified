import {Page, NavController, NavParams} from 'ionic-angular';

import {PostPage} from './../post/post'
import {ProfilePage} from './../profile/profile'
import {ListPage} from './../list/list'
import {PostService} from './../../services/PostService';

@Page({
  templateUrl: 'build/pages/detail/detail.html'
})
export class DetailPage {

	public ad = null;
	constructor(private _postService: PostService, public nav: NavController, public navParams : NavParams) {

  	}

  	ngOnInit() {
  		
  		let id = this.navParams.get(id);

        this._postService.findById(id).subscribe(
            data => this.ad = data.json(),
            err => {
                if (err.status == 404) {
                    this.ad = 'This repo does not have a README. :(';
                } else {
                    console.error(err);
                }
            },
            () => console.log('getDetails completed')
        );
    }




  	

  	gotoPage(page) {
		this.nav.push(page);
	}
}
