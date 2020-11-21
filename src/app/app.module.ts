import { BrowserModule    } from '@angular/platform-browser';
import { NgModule         } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';
import { FooterComponent  } from './footer/footer.component';
import { NavbarComponent  } from './navbar/navbar.component';
import { LoginComponent   } from './login/login.component';
import { SignupComponent  } from './signup/signup.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { GameComponent    } from './game/game.component';
import { HomeComponent    } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'
import { PlayerService } from './Services/player.service';
import { SquareComponent } from './square/square.component';
  
  

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    PlayerstatsComponent,
    GameComponent,
    HomeComponent,
    SquareComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [
    PlayerService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
