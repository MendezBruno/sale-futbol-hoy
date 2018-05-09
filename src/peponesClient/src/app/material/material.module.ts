import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  // Forms
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,
  // Navigations
  MatToolbarModule,
  MatMenuModule,
  // Layouts
  MatCardModule,
  MatExpansionModule,
  MatTabsModule,
  // Popups and modals
  MatDialogModule,
  // Buttons & Indicators
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    // Forms
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    // Navigations
    MatToolbarModule,
    MatMenuModule,
    // Layouts
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    // Popups and modals
    MatDialogModule,
    // Buttons & Indicators
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    // Forms
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    // Navigations
    MatToolbarModule,
    MatMenuModule,
    // Layouts
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    // Popups and modals
    MatDialogModule,
    // Buttons & Indicators
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    ]
})
export class MaterialModule { }
