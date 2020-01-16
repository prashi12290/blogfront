import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper:HttpClient) { }

  InsertBlog(postObj){
    return this.helper.post("http://localhost:9898/emps",postObj);
  }

  InsertUser(userObj){
    console.log("user"+JSON.stringify(userObj));
    return this.helper.post("http://localhost:7070/signup",userObj);
  }
}
