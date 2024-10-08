import { Component, Input } from '@angular/core';
import { ModoOscuroService } from '../../services/modo-oscuro.service';

@Component({
  selector: 'app-toogle-dark-mode',
  template: `
    <label class="label cursor-pointer space-x-2" [ngClass]="className">
      <span>Dark Mode</span>
      <input
        type="checkbox"
        class="toggle toggle-success md:toggle-md toggle-sm"
        (change)="swithDarkMode()"
        [checked]="isDarkMode()"
      />
    </label>
  `,
  styleUrl: './toogle-dark-mode.component.css',
})
export class ToogleDarkModeComponent {
  @Input() className?: string;
  public modoOscuro: ModoOscuroService;

  constructor(modoOscuro: ModoOscuroService) {
    this.modoOscuro = modoOscuro;
  }

  swithDarkMode() {
    this.modoOscuro.toggleModoOscuro();
  }

  isDarkMode() {
    return this.modoOscuro.isModoOscuro();
  }
}
