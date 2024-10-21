import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private userRole: 'admin' | 'user' | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      this.router.navigate(['/admin']);
      return true;
    } else if (username === 'user' && password === 'user123') {
      this.isAuthenticated = true;
      this.userRole = 'user';
      this.router.navigate(['/user']);
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  getRole(): 'admin' | 'user' | null {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = null;
    this.router.navigate(['/login']);
  }
}
