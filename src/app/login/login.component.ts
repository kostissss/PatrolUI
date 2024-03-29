import { Component } from '@angular/core';
import { faCoffee, faUser,faGlobe,faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  faCoffee = faCoffee;
  faUser = faUser;
  faGlobe=faGlobeAmericas;

}
