import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../components/principal/principal.component';
import { AdminUsersComponent } from '../components/admin/admin-users/admin-users.component';
import { AdminPrincipalComponent } from '../components/admin/admin-principal/admin-principal.component';
import { AdminGuard } from '../guards/admin.guard';
import { LoginComponent } from '../components/usuario/login/login.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/principal', pathMatch: 'full'},
    { path: 'principal', component: PrincipalComponent},
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminPrincipalComponent, canActivate: [ /*AdminGuard*/],
      children: [
        { path: 'users', component: AdminUsersComponent},
      ]},

];



@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],  // Para debug],
    exports: [ RouterModule ]
  })
export class AppRoutingModule { }
