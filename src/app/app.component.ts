import { Component } from '@angular/core';
import io from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tick-tack-toe-angular';

  private socket:any;

  public ngOnInint(){
    this.socket = io("http://localhost:8080");
  }

  public ngAfterViewInit(){
    this.socket.on("game");
  }
}
