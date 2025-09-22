import { Component } from '@angular/core';

@Component({
  selector: 'Liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.css'
})

export class Liste {

  films: Film[] = [
    new Film('Le Petit Nicolas', 'nicolas.jpg'),
    new Film('Le Fabuleux Destin d\'Amélie Poulain', 'amelie.jpg'),
    new Film('Papy fait de la résistance', 'papy.jpg'),
    new Film('La Haine', 'haine.jpg'),
    new Film('Fanfan La Tulipe', 'fan.jpeg')
  ];

  selectedFilm: Film | null = null;

  displayFilm(film: Film) {
    this.selectedFilm = film;
  }

}

class Film {

  titre: string;
  affiche: string;

  constructor( titre: string,affiche : string) {
    this.titre = titre;
    this.affiche = affiche;
  }
}


