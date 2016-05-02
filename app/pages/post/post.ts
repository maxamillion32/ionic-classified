import {Page, NavController, NavParams} from 'ionic-angular';

//Services 
import {PostService} from './../../services/PostService';
import {HomePage} from './../home/home';
import {ListPage} from './../list/list';

@Page({
	templateUrl: 'build/pages/post/post.html'
})
export class PostPage {

	public _homePage = HomePage;
	public featured = null;
	public categories = [
        "Cars",
        "Eeal Estate",
        "Jobs",
        "Cell Phones",
        "Electronics",
        "Laptops",
        "Camera"
    ];

	constructor(private nav: NavController, private _postService: PostService, public navParams: NavParams) {

	}

	createAd(title, description, price, category){
		title = title.value;
      	description = description.value;
      	price = price.value;
      	category = category.text;
	      
      	let featured = this.featured;
      	let postImage = 'images/dummys.jpg';
	      
      	this._postService.postAd(title, description, price, postImage, category, featured);
	    
		this.nav.push(ListPage); 
	}


}
