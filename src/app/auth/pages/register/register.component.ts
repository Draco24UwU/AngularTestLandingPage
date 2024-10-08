import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public form = signal<FormGroup>(
    new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    })
  );

  public handleSubmit() {
    if (this.form().valid) {
      alert('Formulario valido y listo para enviarse al servidor.');
    } else {
      this.form().markAllAsTouched();
      alert('Formulario invalido');
    }
  }
}
