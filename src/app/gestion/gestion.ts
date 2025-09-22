import { Component } from '@angular/core';
import { ContactData } from '../services/contact-data';
import { Error404 } from '../error404/error404';

@Component({
  selector: 'Gestion',
  imports: [Error404],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css'
})
export class Gestion {
  constructor(public contactData: ContactData) {}
}
