import { Component, OnInit } from '@angular/core';
import { Player } from '../Models/Player';
import { PlayerService } from '../Services/player.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //Attributes.
  player: Player = new Player();
  message:any;


  constructor(private service:PlayerService) { 

  }

  ngOnInit() {

  }
  

  public registerNow(){
    let resp=this.service.doRegistration(this.player);
    resp.subscribe((data)=>this.message=data);
  }

}
