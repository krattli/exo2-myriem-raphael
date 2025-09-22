import { Component } from '@angular/core';

@Component({
  selector: 'Liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.css'
})

export class Liste {

  films: Film[] = [
    new Film('Inception', 'assets/images/inception.jpg'),
    new Film('Interstellar', 'assets/images/interstellar.jpg'),
    new Film('The Dark Knight', 'assets/images/dark-knight.jpg'),
    new Film('Matrix', 'assets/images/matrix.jpg'),
    new Film('Le Seigneur des Anneaux', 'assets/images/lotr.jpg')
  ];

  selectedFilm: Film | null = null;

  selectFilm(film: Film) {
    this.selectedFilm = film;
  }

}

class Film {

  constructor(
    public nom: string,
    public affiche: string
  ) {}
}
