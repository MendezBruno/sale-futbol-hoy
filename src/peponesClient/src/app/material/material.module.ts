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
  MatDatepickerModule,
  // Navigations
  MatToolbarModule,
  MatMenuModule,
  // Layouts
  MatCardModule,
  MatExpansionModule,
  MatTabsModule,
  MatListModule,
  MatGridListModule,
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
    MatDatepickerModule,
    // Navigations
    MatToolbarModule,
    MatMenuModule,
    // Layouts
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
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
    MatDatepickerModule,
    // Navigations
    MatToolbarModule,
    MatMenuModule,
    // Layouts
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    // Popups and modals
    MatDialogModule,
    // Buttons & Indicators
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    ]
})
export class MaterialModule { }
