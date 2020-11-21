import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Player } from '../Models/Player';
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class PlayerService {  
  

  constructor(private http:HttpClient) { }


  public doRegistration(player){
    return this.http.post("http://localhost:8080/Signup",player,{responseType:'text' as 'json'});
  }
    
  public getLogin(name, password){
    return this.http.get("http://localhost:8080/Login//"+name+"/"+password);
  }
} 