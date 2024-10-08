import { Component } from '@angular/core';
import { ModoOscuroService } from '../../services/modo-oscuro.service';

@Component({
  selector: 'app-dark-mode-layout',
  template: `
    <div [ngClass]="{ dark: isDarkMode() }">
      <div
        class="dark:bg-slate-900 dark:text-white bg-neutral-800 text-slate-300 transition-colors duration-300"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrl: './dark-mode-layout.component.css',
})
export class DarkModeLayoutComponent {
  public modoOscuro: ModoOscuroService;

  constructor(modoOscuro: ModoOscuroService) {
    this.modoOscuro = modoOscuro;
  }

  isDarkMode() {
    return this.modoOscuro.isModoOscuro();
  }
}
