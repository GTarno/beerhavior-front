import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GitHubLoginComponent } from './login/git-hub-login/git-hub-login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileTypeComponent } from './register/profile-type/profile-type.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormComponentComponent } from './register-form/register-form-component/register-form-component.component';
import { GenericErrorComponent } from './error/generic-error/generic-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    RegisterComponent,
    ProfileComponent,
    GitHubLoginComponent,
    HeaderComponent,
    ProfileTypeComponent,
    AppHeaderComponent,
    RegisterFormComponent,
    RegisterFormComponentComponent,
    GenericErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
