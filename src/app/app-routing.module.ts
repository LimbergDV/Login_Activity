import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ProfileListComponent } from './user/profile-list/profile-list.component';
import { AdminManagementComponent } from './admin/admin-management/admin-management.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: ProfileListComponent },
  { path: 'admin', component: AdminManagementComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
