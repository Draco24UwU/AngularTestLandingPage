import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './UI/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterlinkComponent } from './UI/routerlink/routerlink.component';
import { RouterModule } from '@angular/router';
import { DarkModeLayoutComponent } from './dark-mode-layout/dark-mode-layout.component';
import { ToogleDarkModeComponent } from './toogle-dark-mode/toogle-dark-mode.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent,
    RouterlinkComponent,
    DarkModeLayoutComponent,
    ToogleDarkModeComponent,
    FooterComponent,
  ],
  imports: [CommonModule, MatIconModule, FormsModule, RouterModule],
  exports: [
    ButtonComponent,
    NavbarComponent,
    RouterlinkComponent,
    DarkModeLayoutComponent,
    ToogleDarkModeComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
