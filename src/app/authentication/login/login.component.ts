import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService){}

  onLogin(): void {
    if (!this.authService.login(this.username, this.password)) {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
  
}
