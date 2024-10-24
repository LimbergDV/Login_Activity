import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationModule } from "./authentication/authentication.module";
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthenticationModule,
    AdminModule,
    UserModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
