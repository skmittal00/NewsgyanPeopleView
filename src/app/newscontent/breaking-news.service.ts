import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inews } from '../newscontent/inews';
import { iImages } from '../model/iImages';



@Injectable(

)

export class BreakingNewsService {
  //mainUrl="ec2-13-127-138-108.ap-south-1.compute.amazonaws.com/api/"
 // mainUrl= "http://ec2-13-127-138-108.ap-south-1.compute.amazonaws.com:3000/";

 //ec2-35-154-104-91.ap-south-1.compute.amazonaws.com
  //mainUrl="http://ec2-13-127-138-108.ap-south-1.compute.amazonaws.com:3000/api/";
  //mainUrl="http://15.206.187.62:3000/api/";
  //mainUrl="http://13.127.138.108:3000/api/"
  mainUrl = 'http://localhost:3000/api/';
  newsdetail = 'http://15.206.187.62:3000/api/GetAllNews';
  Brknewsdetail = 'http://15.206.187.62:3000/api/BrkNews';
  getbyId='http://15.206.187.62:3000/api/getnewsbyId/';
  constructor(private brnewshttp: HttpClient) { }

  //let today:Date=new Date();
  //console.log(today);
  //fetching News Detail
  getpublishedNews():Observable<inews[]>{
    return this.brnewshttp.get<inews[]>(this.mainUrl+'PeopleNews');
  }

  BreakingNews(): Observable<inews[]> {
    return this.brnewshttp.get<inews[]>(this.Brknewsdetail);
  }
  // let today:Date=new Date();

  Corner_Gernal(): Observable<iImages[]> {
    return this.brnewshttp.get<iImages[]>(this.mainUrl + 'GetImages');
  }
  Corner_finance():Observable<inews[]>{
    return this.brnewshttp.get<inews[]>(this.mainUrl+'FinCorner');
  }
  getNewsById(nid:string):Observable<inews[]>{
    debugger;
    return this.brnewshttp.get<inews[]>(this.getbyId + nid);
  }



}
