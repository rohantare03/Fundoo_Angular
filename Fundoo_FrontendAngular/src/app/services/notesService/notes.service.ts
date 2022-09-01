import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token : any

  constructor(private httpService : HttpService) { 
    this.token = localStorage.getItem('token') 
  }

  createnotes(reqdata: any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.postService('/Notes/Create',reqdata,true,header)
  }

  getallnotes(){

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.getService('/Notes/Retrieve',true,header)
  }

  updatenotes(reqdata: any, noteID: any){

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.putService('/Notes/Update?NoteId='+ noteID,reqdata,true,header)
  }

  trashnotes(reqdata: any){
    // this.token=localStorage.getItem('token');

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.putService('/Notes/Trash?NoteID='+reqdata.noteID,{},true,header)
  }

  archivenotes(reqdata: any){
    // this.token=localStorage.getItem('token');

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.putService('/Notes/Archive?NoteID='+reqdata.noteID,{},true,header)
  }

}
