import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public form = signal<FormGroup>(
    new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
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
