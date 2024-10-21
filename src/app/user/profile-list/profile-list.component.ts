import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css'
})
export class ProfileListComponent {
  profiles = [
    { id:1, name: 'Limberg Del Valle', email: 'limbergDV@example.com'},
    { id:2, name: 'Jenry Gómez', email: 'jenrygom@example.com' },
    { id:3, name: 'Kevin Moráles', email: 'kevMora33@example.com'}
  ];
}
