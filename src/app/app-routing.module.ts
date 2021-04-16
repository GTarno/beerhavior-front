import { ProfileAdminComponent } from './profile-components/profile-admin/profile-admin.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileProgrammerComponent } from './profile-components/profile-programmer/profile-programmer.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro/tipo', component: RegisterComponent },
    { path: 'registro', component: RegisterFormComponent },
    { path: 'inicio/colaborador', component: ProfileProgrammerComponent },
    { path: 'inicio/admin', component: ProfileAdminComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }