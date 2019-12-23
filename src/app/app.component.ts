import { Component } from '@angular/core';
import { AuthenticationService } from '../../src/app/shared/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Authantication-Angular6';

  email: string;
  password: string;
  constructor( public authenticationService: AuthenticationService) {}
  
  signUp() {

    console.log(this.email)
    this.authenticationService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';

  }

  signIn() {
    this.authenticationService.SignIn(this.email,this.password);
    console.log(this.email)
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  } 
}
