import { Component, OnInit } from '@angular/core';
import { ContactData } from '../services/contact-data';
import { Error404 } from '../error404/error404';
import { Router } from '@angular/router';

@Component({
  selector: 'Gestion',
  imports: [Error404],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css'
})
export class Gestion implements OnInit {
  constructor(
    public contactData: ContactData,
    private router: Router
  ) {}

  ngOnInit(): void {
      if (this.contactData.nom == null) {
        this.router.navigate(['/error'])
      }
  }
}
