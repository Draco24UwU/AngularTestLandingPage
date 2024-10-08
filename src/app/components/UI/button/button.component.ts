import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="flex btn btn-ghost font-normal hover:bg-inherit justify-center items-center space-x-2"
      [ngClass]="className"
      (click)="handleClick()"
    >
      <ng-container *ngIf="reverse; else iconFirst">
        <mat-icon class="text-center" *ngIf="icon">{{ icon }}</mat-icon>
        <p *ngIf="label">{{ label }}</p>
      </ng-container>
      <ng-template #iconFirst>
        <p *ngIf="label">{{ label }}</p>
        <mat-icon class="text-center" *ngIf="icon">{{ icon }}</mat-icon>
      </ng-template>
    </button>
  `,
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() reverse: boolean = false;
  @Input() className: string = '';
  @Output() btnClick = new EventEmitter<void>();

  handleClick() {
    this.btnClick.emit();
  }
}
