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
import { AdminPartidosComponent } from './components/admin/admin-partidos/admin-partidos.component';
import { AdminJugadorComponent } from './components/admin/admin-jugador/admin-jugador.component';
import { SocketService } from './services/socket.service';
import { MatNativeDateModule } from '@angular/material';
import { SubHeaderOneComponent } from './components/subcomponents/sub-header-one/sub-header-one.component';
import { ProximoPartidoComponent } from './components/usuario/proximo-partido/proximo-partido.component';
import { ChatComponent } from './components/usuario/chat/chat.component';


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
    AdminPartidosComponent,
    AdminJugadorComponent,
    SubHeaderOneComponent,
    ProximoPartidoComponent,
    ChatComponent,


  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MaterialModule,
    MatNativeDateModule,
  //  MatMomentDateModule,
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
