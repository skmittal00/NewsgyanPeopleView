import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inews } from '../newscontent/inews';
import { Observable } from 'rxjs/';
import { BreakingNewsService } from '../newscontent/breaking-news.service';
import { iImages } from '../model/iImages';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.scss']
})
export class NewscontentComponent implements OnInit {

  BrDetail: inews[]; FinCorner: any[] = []; SportCorner: any[] = []; TechCorner: any[] = []; AutoCorner: any[] = [];
  ArtCorner: any[] = []; _BigNews1: any[] = []; _BigNews2: any[] = []; _BigNews3: any[] = []; _BigNews4: any[] = []; Newsdt: any[] = [];

  constructor(private brNwshttp: HttpClient, private BrNService: BreakingNewsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getNewsDetail();
    this.BussinessCorner();
    this.SportsCorner();
    this.TechsCorner();
    this.AutosCorner();
    this.ArtsCorner();
    this.Bulletin_1st_left();
    this.getBigNews2();
    this.getBigNews3();
    this.popularNews1();
    this.popularNews2();
    this.popularNews3();
    this.popularNews4();
    this.MostPopularnews();
    this.WorldNews();
    

  }
  getNewsDetail() { this.BrNService.BreakingNews().subscribe(BrNews => this.BrDetail = BrNews); }

  //# this below functions for Corner News
  BussinessCorner() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var FinancenewsCorner = pbNews;
      var findb = [];
      for (var i = 0; i < FinancenewsCorner.length; i++) {
        findb = FinancenewsCorner[i].NewsUnique;
        if (FinancenewsCorner[i].NewsPlace === "Cor_1st_1stCol") {
          for (var j = 0; j < findb.length; j++) {
            if (findb[j].NCRefNum === "BN1113") {
              this.FinCorner.push(FinancenewsCorner[i]);
              //console.log(this.FinCorner[i]);
            }
          }
        }
      }
    });
  }
  SportsCorner() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var _SportsCorner = pbNews;
      var findb = [];
      for (var i = 0; i < _SportsCorner.length; i++) {
        findb = _SportsCorner[i].NewsUnique;
        if (_SportsCorner[i].NewsPlace === "Cor_1st_2ndCol") {
          for (var j = 0; j < findb.length; j++) {
            if (findb[j].NCRefNum === "SN1112") {
              this.SportCorner.push(_SportsCorner[i]);
              // console.log(this.SportCorner[i]);
            }
          }
        }
      }
    });
  }
  TechsCorner() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var _TechCorner = pbNews;
      var findb = [];
      for (var i = 0; i < _TechCorner.length; i++) {
        findb = _TechCorner[i].NewsUnique;
        if (_TechCorner[i].NewsPlace === "Cor_1st_4thCol") {
          for (var j = 0; j < findb.length; j++) {
            if (findb[j].NCRefNum === "TN1104") {
              this.TechCorner.push(_TechCorner[i]);
              // console.log(this.TechCorner[i]);
            }
          }
        }
      }
    });
  }
  AutosCorner() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var _AutoCorner = pbNews;
      var findb = [];
      for (var i = 0; i < _AutoCorner.length; i++) {
        findb = _AutoCorner[i].NewsUnique;
        if (_AutoCorner[i].NewsPlace === "Cor_1st_3rdCol") {
          for (var j = 0; j < findb.length; j++) {
            if (findb[j].NCRefNum === "AN1103") {
              this.AutoCorner.push(_AutoCorner[i]);
            }
          }
        }
      }
    });
  };
  ArtsCorner() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var _ArtCorner = pbNews;
      var findb = [];
      for (var i = 0; i < _ArtCorner.length; i++) {
        findb = _ArtCorner[i].NewsUnique;
        if (_ArtCorner[i].NewsPlace === "Cor_2nd_1stCol") {
          for (var j = 0; j < findb.length; j++) {
            if (findb[j].NCRefNum === "AN1110") {
              this.ArtCorner.push(_ArtCorner[i]);
              //console.log(this.ArtCorner[i]);
            }
          }
        }
      }
    });
  };
  //#End of the Corner News functions 
  //#Start functions for BigNewses
  newscount: any;
  newsshow: any;
  newsdt: any;
  newscn: any;
  morenews: any;
  Bulletin_1st_left() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var bignews1 = pbNews;
      for (var i = 0; i < bignews1.length; i++) {
        if (bignews1[i].NewsPlace === "BN111") {
          this.newscount = bignews1[i].News;
          if (this.newscount.length > 400) {
            this.newsdt = bignews1[i].News;
            this.newscount = bignews1[i].News.substr(0, 600);
            this.newsshow = bignews1[i].News.substr(501 - 1, this.newsdt - this.newscount);
            this.morenews = this.newscount + " ... " + this.newsshow;

            //  console.log(this.newscount+" ... "+ this.newsshow +"  more");
            //this.newscount=bignews1[i].News.substr(0,100);
            //this.newsshow=bignews1[i].News.substr(100-1,bignews1[i].News.length-100);

          }

          this._BigNews1.push(bignews1[i]);
        }
      }
      //console.log(this._BigNews1);
    });
  }
  getBigNews2() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var bignews2 = pbNews;
      for (var i = 0; i < bignews2.length; i++) {
        if (bignews2[i].NewsPlace === "BN112") {
          this._BigNews2.push(bignews2[i]);
        }

      }
     // console.log(this._BigNews2);

    });
  }
  getBigNews3() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var bignews3 = pbNews;
      for (var i = 0; i < bignews3.length; i++) {
        if (bignews3[i].NewsPlace === "BN113") {
          this._BigNews3.push(bignews3[i]);
        }
      }
     // console.log(this._BigNews3);
    });
  }
  _Popularnews1: any[] = [];
  popularNews1() {
    debugger;
    this.BrNService.getpublishedNews().subscribe((_pbNews) => {
      var Popularnews1 = _pbNews;
      for (var i = 0; i < Popularnews1.length; i++) {
        if (Popularnews1[i].NewsPlace === "BN111") {
          this._Popularnews1.push(Popularnews1[i]);
        }
      }
      //console.log(this._Popularnews1);
    });
  }
  _Popularnews2: any[] = [];
  popularNews2() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var Popularnews2 = pbNews;
      for (var i = 0; i < Popularnews2.length; i++) {
        if (Popularnews2[i].NewsPlace === "BN111") {
          this._Popularnews2.push(Popularnews2[i]);
        }
      }
     // console.log(this._BigNews3);
    });
  }
  _Popularnews3: any[] = [];
  popularNews3() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var Popularnews3 = pbNews;
      for (var i = 0; i < Popularnews3.length; i++) {
        if (Popularnews3[i].NewsPlace === "BN111") {
          this._Popularnews3.push(Popularnews3[i]);
        }
      }
     // console.log(this._BigNews3);
    });
  }
  _Popularnews4: any[] = [];
  popularNews4() {
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var Popularnews4 = pbNews;
      for (var i = 0; i < Popularnews4.length; i++) {
        if (Popularnews4[i].NewsPlace === "BN111") {
          this._Popularnews4.push(Popularnews4[i]);
        }
      }
      //console.log(this._BigNews3);
    });
  }
  _mostpopularnews: any[] = [];
  MostPopularnews() {
    debugger;
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var MostPopularnewsresult = pbNews;
      for (var i = 0; i < MostPopularnewsresult.length; i++) {
        if (MostPopularnewsresult[i].NewsPlace === "BN111") {
          this. _mostpopularnews.push(MostPopularnewsresult[i]);
        }
      }
      //console.log(this._mostpopularnews);
    });
  }
  _Editorsnews1:any[]=[];
  EditorsNewsbottom1(){
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var Editorsnews1 = pbNews;
      for (var i = 0; i < Editorsnews1.length; i++) {
        if (Editorsnews1[i].NewsPlace === "BN111") {
          this._Popularnews4.push(Editorsnews1[i]);
        }
      }
     // console.log(this._Editorsnews1);
    });
  }
  _Editorsnews2:any[]=[];
  EditorsNewsbottom2(){
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var Editorsnews2 = pbNews;
      for (var i = 0; i < Editorsnews2.length; i++) {
        if (Editorsnews2[i].NewsPlace === "BN111") {
          this._Popularnews4.push(Editorsnews2[i]);
        }
      }
      //console.log(this._Editorsnews2);
    });
  }
  _Editorsnews3:any[]=[];
  EditorsNewsbottom3(){
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var Editorsnews3 = pbNews;
      for (var i = 0; i < Editorsnews3.length; i++) {
        if (Editorsnews3[i].NewsPlace === "BN111") {
          this._Popularnews4.push(Editorsnews3[i]);
        }
      }
      //console.log(this._Editorsnews3);
    });
  }
  _Editorsnews4:any[]=[];
  EditorsNewsbottom4(){
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var Editorsnews4 = pbNews;
      for (var i = 0; i < Editorsnews4.length; i++) {
        if (Editorsnews4[i].NewsPlace === "BN111") {
          this._Popularnews4.push(Editorsnews4[i]);
        }
      }
      //console.log(this._Editorsnews4);
    });
  }
  _Editorsnews5:any[]=[];
  EditorsNewsbottom5(){
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var Editorsnews5 = pbNews;
      for (var i = 0; i < Editorsnews5.length; i++) {
        if (Editorsnews5[i].NewsPlace === "BN113") {
          this._Popularnews4.push(Editorsnews5[i]);
        }
      }
     // console.log(this._Editorsnews5);
    });
  }
  _Editorsnews6:any[]=[];
  EditorsNewsbottom6(){
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var Editorsnews6 = pbNews;
      for (var i = 0; i < Editorsnews6.length; i++) {
        if (Editorsnews6[i].NewsPlace === "BN111") {
          this._Popularnews4.push(Editorsnews6[i]);
        }
      }
      //console.log(this._Editorsnews6);
    });
  }

_worldNews:any[]=[];
 WorldNews(){
    this.BrNService.getpublishedNews().subscribe((pbNews) => {
      var wnresult = pbNews;
      for (var i = 0; i < wnresult.length; i++) {
        if (wnresult[i].NewsPlace === "BN111") {
          this._worldNews.push(wnresult[i]);
        }
      }
     // console.log(this._worldNews);
    });
  }


  _news: string;
  getnewsbyId(nId: string) {
    debugger;
    this.BrNService.getNewsById(nId).subscribe((News) => {
      this.Newsdt = News;
      for (var i = 0; i < this.Newsdt.length; i++) {
        this._news = this.Newsdt[i].News;
      }
     // console.log(this._news);
    });
  }


};
