import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: string[] = [
    'assets/images/gallery/outdoor1.jpg',
    'assets/images/gallery/flower1.jpg',
    'assets/images/gallery/indoor1.jpg',
    'assets/images/gallery/outdoor2.jpg',
    'assets/images/gallery/indoor2.jpg',
    'assets/images/gallery/outdoor3.jpg',

    'assets/images/gallery/flower3.jpg',
    'assets/images/gallery/indoor3.jpg',
    'assets/images/gallery/outdoor4.jpeg',
    'assets/images/gallery/flower4.jpg',
    'assets/images/gallery/indoor4.jpg',
    'assets/images/gallery/outdoor5.jpeg',
    'assets/images/gallery/flower5.jpg',

    'assets/images/gallery/indoor5.jpg',
    'assets/images/gallery/outdoor6.jpeg',
    'assets/images/gallery/flower6.jpg',
    'assets/images/gallery/indoor6.jpg',
    'assets/images/gallery/outdoor7.jpeg',
    'assets/images/gallery/flower7.jpg',
    'assets/images/gallery/indoor7.jpg',

    'assets/images/gallery/outdoor8.jpeg',
    'assets/images/gallery/flower8.jpg',
    'assets/images/gallery/indoor8.jpg',
    'assets/images/gallery/outdoor9.jpeg',
    'assets/images/gallery/flower9.jpg',
    'assets/images/gallery/outdoor10.jpeg',
    'assets/images/gallery/flower10.jpg',
  
    'assets/images/gallery/flower4.jpg',
    'assets/images/gallery/indoor4.jpg',
    'assets/images/gallery/outdoor5.jpeg',
    'assets/images/gallery/flower5.jpg',
    'assets/images/gallery/indoor6.jpg',
    'assets/images/gallery/outdoor7.jpeg',
    'assets/images/gallery/flower7.jpg',


  ];

  images1: string[] = new Array();
  images2: string[] = new Array();
  images3: string[] = new Array();
  images4: string[] = new Array();

  ngOnInit(): void {
    let listLen = this.images.length;
    let subLength = listLen / 4;
    this.images4 = this.images.slice(0, subLength);
    this.images3 = this.images.slice(subLength, subLength * 2);
    this.images2 = this.images.slice(subLength * 2, subLength * 3);
    this.images1 = this.images.slice(subLength * 3);
  }

}
