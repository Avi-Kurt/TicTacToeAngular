import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: '', redirectTo: 'home-component', pathMatch: 'full' },  
  { path: 'home-component',   component: HomeComponent   },
  { path: 'signup-component', component: SignupComponent },
  { path: 'game-component', component: GameComponent },
  { path: 'login-component',  component: LoginComponent,
                children: [
                  {
                    path: 'playerstats-component',
                    component: PlayerstatsComponent,
                  }
                ],
              },

  { path: '**',               component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
