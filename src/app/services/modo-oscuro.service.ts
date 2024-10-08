import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModoOscuroService {
  private modoOscuro: boolean = false;
  private modoOscuroKey = 'darkMode';

  constructor() {
    // Inicializa el estado del modo oscuro desde el localStorage
    const modoOscuro = localStorage.getItem(this.modoOscuroKey);
    // Convierte el valor a booleano
    this.modoOscuro = modoOscuro === 'true';
  }

  activarModoOscuro() {
    this.modoOscuro = true;
    localStorage.setItem(this.modoOscuroKey, 'true'); // Guarda en localStorage
  }

  desactivarModoOscuro() {
    this.modoOscuro = false;
    localStorage.setItem(this.modoOscuroKey, 'false'); // Guarda en localStorage
  }

  toggleModoOscuro() {
    this.modoOscuro = !this.modoOscuro;
    localStorage.setItem(this.modoOscuroKey, String(this.modoOscuro)); // Guarda en localStorage
  }

  isModoOscuro() {
    return this.modoOscuro;
  }
}
