import {Injectable} from 'angular2/core';

export class postItem {
    _id: string;
    title: string;
    description: string;
    price: string;
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

    createAdInService(title, description, price, mainImage, category, featured) {
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


}

