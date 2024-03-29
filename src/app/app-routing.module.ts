import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProfileAdminComponent } from './profile-components/profile-admin/profile-admin.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileProgrammerComponent } from './profile-components/profile-programmer/profile-programmer.component';
import { GenericErrorComponent } from './error/generic-error/generic-error.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro/tipo', component: RegisterComponent },
    { path: 'registro', component: RegisterFormComponent },
    { path: 'inicio/colaborador', component: ProfileProgrammerComponent },
    { path: 'inicio/admin', component: ProfileAdminComponent },
    { path: 'novo-projeto', component: NewProjectComponent },
    { path: 'projeto', component: ProjectComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'erro', component: GenericErrorComponent },
    { path: '', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }