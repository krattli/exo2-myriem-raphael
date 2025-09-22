import { Component } from '@angular/core';
import { ContactData } from '../contact-data';

@Component({
  selector: 'Gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css'
})
export class Gestion {
  constructor(public contact_data: ContactData) {}
}
