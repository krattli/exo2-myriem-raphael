import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ContactData } from '../contact-data';
import { Router } from '@angular/router';

@Component({
  selector: 'Contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})

export class Contact {

  constructor(
    private contact_service: ContactData,
    private router: Router
  ) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contact_service.nom = form.value.nom;
      this.contact_service.prenom = form.value.prenom;
      this.contact_service.age = form.value.age;
      this.contact_service.commentaire = form.value.commentaire;

      this.router.navigate(['/']);
    }
  }
}
