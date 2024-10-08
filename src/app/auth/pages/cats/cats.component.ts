import { Component, inject } from '@angular/core';
import { APIService } from '../../../services/api.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css',
})
export class CatsComponent {
  public CatAPI: APIService = inject(APIService);

  public cats: any;
  public cat: any;

  ngOnInit() {
    this.CatAPI.getCats('10').subscribe(
      (res) => {
        this.cats = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.CatAPI.getCat().subscribe(
      (res) => {
        this.cat = res[0];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  generateNewCat() {
    this.CatAPI.getCat().subscribe(
      (res) => {
        this.cat = res[0];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  generateNewCats() {
    this.CatAPI.getCats('10').subscribe(
      (res) => {
        this.cats = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
