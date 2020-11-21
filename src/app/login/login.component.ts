import { Component, OnInit } from '@angular/core';
import { Player } from '../Models/Player';
import { PlayerService } from '../Services/player.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Attributes.
  player: Player = new Player();
  message:any;


  constructor(private service:PlayerService) { 

  }
  ngOnInit(): void {
  }


  public getLogin(){
    //get response from server
    let resp = this.service.getLogin(this.player.name, this.player.password);

    
    //publish the response
    resp.subscribe((player)=>this.message=this.player.name);
  }
  
}
