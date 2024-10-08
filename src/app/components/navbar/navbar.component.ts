import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { navBarButtons, navBarLinks } from './constants/navbarConstants';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  public links = navBarLinks;
  public buttons = navBarButtons;

  constructor(private router: Router) {}

  //Metodo para cerrar o abrir el menu.
  setMenu = false;
  handleSetMenu = () => {
    this.setMenu = !this.setMenu;
  };

  // Escucha cuando cambia el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth >= 768) {
      this.setMenu = false; // Cierra el menú si la ventana es igual o mayor a 768px
    }
  }

  //Metodo para saber la ruta actual.
  currentRoute: string = '';
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url; // Obtén la ruta actual
      });
  }

  // Método para redirigir a una ruta específica
  redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  // Metodo para los botones de mobile design
  handleMobileButtons = (route: string): void => {
    this.redirectTo(route);
    this.setMenu = false;
  };

  // Metodo para los elemento a de mobile design
  handleMobileLinks = (): void => {
    this.setMenu = false;
  };
}
