import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrl: './admin-management.component.css'
})
export class AdminManagementComponent {
  users = [
    { id:1, name: 'Limberg Del Valle', email: 'limbergDV@example.com'},
    { id:2, name: 'Jenry Gómez', email: 'jenrygom@example.com' },
    { id:3, name: 'Kevin Moráles', email: 'kevMora33@example.com'}
  ];

  newUser = { name: '', email: '' };

  addUser(): void {
    this.users.push({
      id: this.users.length + 1,
      name: this.newUser.name,
      email: this.newUser.email
    });
    this.newUser = { name: '', email: ''};
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }

  editUser(index: number, name: string, email: string): void {
    this.users[index].name = name;
    this.users[index].email = email;
  }
}
