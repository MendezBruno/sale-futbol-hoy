import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './routing/app-routing';

// Pepones app components
import { PrincipalComponent } from './components/principal/principal.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { LoginDialogComponent } from './components/dialogs/login-dialog/login-dialog.component';
import { ConfirmationDialogComponent } from './components/dialogs/commonDialogs/confirmationDialog/confirmationDialog.component';
import { UserModalComponent } from './components/dialogs/user-modal/user-modal.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminPrincipalComponent } from './components/admin/admin-principal/admin-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AdminUsersComponent,
    LoginDialogComponent,
    ConfirmationDialogComponent,
    UserModalComponent,
    NavBarComponent,
    AdminPrincipalComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MaterialModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,

  ],
  providers: [],
  entryComponents: [
    UserModalComponent,
    LoginDialogComponent,
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
