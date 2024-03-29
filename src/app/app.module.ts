import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

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
import { PrizeTableComponent } from './prize/prize-table/prize-table.component';
import { PrizeTableItensComponent } from './prize/prize-table-itens/prize-table-itens.component';
import { AppRoutingModule } from './app-routing.module';
import { CreatePrizeComponent } from './prize/create-prize/create-prize.component';
import { CreatePrizeFormComponent } from './prize/create-prize-form/create-prize-form.component';
import { RedeemPrizeComponent } from './prize/redeem-prize/redeem-prize.component';
import { RedeemPrizeFormComponent } from './prize/redeem-prize-form/redeem-prize-form.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewProjectFormComponent } from './new-project/new-project-form/new-project-form.component';
import { ProjectComponent } from './project/project.component';
import { ProjectHeaderComponent } from './project/project-header/project-header.component';
import { ProjectScoreComponent } from './project/project-score/project-score.component';
import { ProjectPendencyComponent } from './project/project-pendency/project-pendency.component';
import { AddColaboratorComponent } from './project/project-header/add-colaborator/add-colaborator.component';
import { ColaboratorComponent } from './project/project-header/add-colaborator/colaborator/colaborator.component';
import { PendencyComponent } from './project/project-pendency/pendency/pendency.component';
import { PendencyAprovalComponent } from './project/project-pendency/pendency/pendency-aproval/pendency-aproval.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { DashboardPointsComponent } from './dashboard/dashboard-points/dashboard-points.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePt);
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
    ProfileManagerComponent,
    PrizeTableComponent,
    PrizeTableItensComponent,
    CreatePrizeComponent,
    CreatePrizeFormComponent,
    RedeemPrizeComponent,
    RedeemPrizeFormComponent,
    NewProjectComponent,
    NewProjectFormComponent,
    ProjectComponent,
    ProjectHeaderComponent,
    ProjectScoreComponent,
    ProjectPendencyComponent,
    AddColaboratorComponent,
    ColaboratorComponent,
    PendencyComponent,
    PendencyAprovalComponent,
    DashboardComponent,
    DashboardContentComponent,
    DashboardPointsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
