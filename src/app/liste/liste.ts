import { Component } from '@angular/core';

@Component({
  selector: 'Liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.css'
})

export class Liste {

 public films: Film[] = [
    { titre: 'Le Petit Nicolas', affiche: 'nicolas.jpg' },
    { titre: 'Le Fabuleux Destin d\'Amélie Poulain', affiche: 'amelie.jpg' },
    { titre: 'Papy fait de la résistance', affiche: 'papy.jpg' },
    { titre: 'La Haine', affiche: 'haine.jpg' },
    { titre: 'Fanfan La Tulipe', affiche: 'fan.jpeg' }
  ];

  public selectedFilm: Film | null = null;

  public displayFilm(film: Film) {
    this.selectedFilm = film;
  }

}

