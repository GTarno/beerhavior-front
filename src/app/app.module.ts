import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GitHubLoginComponent } from './login/git-hub-login/git-hub-login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileTypeComponent } from './register/profile-type/profile-type.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormComponentComponent } from './register-form/register-form-component/register-form-component.component';
import { GenericErrorComponent } from './error/generic-error/generic-error.component';
import { ProfileHeaderComponent } from './profile-components/profile-header/profile-header.component';
import { ProfileAdminComponent } from './profile-components/profile-admin/profile-admin.component';
import { ProfileProgrammerComponent } from './profile-components/profile-programmer/profile-programmer.component';
import { ProfileRequestJoinProjectComponent } from './profile-components/profile-request-join-project/profile-request-join-project.component';
import { ProfileScoreComponent } from './profile-components/profile-score/profile-score.component';
import { ProfileManagerComponent } from './profile-components/profile-manager/profile-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    RegisterComponent,
    GitHubLoginComponent,
    HeaderComponent,
    ProfileTypeComponent,
    AppHeaderComponent,
    RegisterFormComponent,
    RegisterFormComponentComponent,
    GenericErrorComponent,
    ProfileHeaderComponent,
    ProfileAdminComponent,
    ProfileProgrammerComponent,
    ProfileRequestJoinProjectComponent,
    ProfileScoreComponent,
    ProfileManagerComponent
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
