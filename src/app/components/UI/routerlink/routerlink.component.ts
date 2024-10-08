import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-routerlink',
  template: `
    <a [routerLink]="routerLink" (click)="handleClick()" [ngClass]="className">
      {{ label }}
    </a>
  `,
  styleUrl: './routerlink.component.css',
})
export class RouterlinkComponent {
  @Input() routerLink = '/';
  @Input() label = '';
  @Input() className = '';

  @Output() aClick = new EventEmitter<void>();
  handleClick() {
    this.aClick.emit();
  }
}
