import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

export class postItem {
    _id: string;
    title: string;
    description: string;
    price: number;
    mainImage: string;
    category: string;
    featured: boolean;
}

@Injectable()
export class PostService {

    ads: Array<postItem>;

    constructor() {

        let ads = localStorage.getItem('ads');
        if (ads) {
            this.ads = JSON.parse(ads);
        } else {
            this.ads = [];
        }

    }

    postAd(title, description, price, mainImage, category, featured) {
        let tmp: postItem = {
            _id: (Date.now()).toString(),
            title: title,
            description: description,
            price: price,
            mainImage: mainImage,
            category: category,
            featured: featured
        }
        this.ads.push(tmp);

        localStorage.setItem("ads", JSON.stringify(this.ads));
    }

    getAds() {
        return this.ads;
    }



    findById(id) {

        return Observable.create(observer => {
            observer.next(this.ads[0]);
            observer.complete();
        });

       /* this.ads.forEach(function(item){
            if (item._id = id) {

                return Observable.create(observer => {
                    observer.next(item);
                    observer.complete();
                });
                
            }
        });*/
    }


}

