import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
    autoplay:true
  }
  customOptionsBrand: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      }
    },
    nav: false,
    autoplay:true
  }
  constructor() { }

  ngOnInit(): void {
  }



  activeSlides: SlidesOutputData;
  activeSlidesBrand: SlidesOutputData;

  slidesStore: any[] = [
    {
      id:'',
      client:'Christoph Drayss',
      position:' Lorsch, Germany',
      message: '    It is a pleasure to work with Hemant as he is very responsive and had throughout understanding of Angular (Material) / ngrx etc.',
    },
    {
      id:'',
      client:'Yasser B.',
      position:'Bloomfield, New Jersey',
      message: 'Working with Hemant was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients.',
    },
    {
      id:'',
      client:'Yafeu Marston',
      position:'Rockville, United States',
      message:'Hemant was very responsive, and delivered by my request ahead of time. He also went the extra mile ensured the feature I requested worked on various devices before closing out the project.'
    },
    {
      id:'',
      client:'Tariq Yusuf',
      position:'Karachi, Pakistan',
      message:'I had the pleasure of working with Hemant for one of my website, it was an Angular based website with design requirements to be done using html, css and bootstrap and make it fully responsive and mobile friendly, Hemant was spot on and he completed everything on time, I would recommend Hemant for other as he has got excellent technical skills for website design and development.'
    },
    {
      id:'',
      client:'Vlad Postelnicuf',
      position:'Co-Founder @ mpdm.agency',
      message:'We have collaborated with Hemant on some small projects. They were active and did their best to solve our issues. We are certainly going to collaborate on more projects in the future, thanks to their willingness to help us out and their availability.'
    },


  ];
  slidesStoreBrand: any[] = [
    {
      id:'',
      img:'assets/img/brand/b1.png'
    },
    {
      id:'',
      img:'assets/img/brand/b2.png'
    },
    {
      id:'',
      img:'assets/img/brand/b3.png'
    },
    {
      id:'',
      img:'assets/img/brand/b4.png'
    },
  ]

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  getPassedDataBrand(data: SlidesOutputData) {
    this.activeSlidesBrand = data;
  }
}
