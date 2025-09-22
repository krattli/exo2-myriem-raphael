import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ContactData } from '../services/contact-data';
import { Router } from '@angular/router';

@Component({
  selector: 'Contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})

export class Contact {

  constructor(
    private contactService: ContactData,
    private router: Router
  ) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contactService.nom = form.value.nom;
      this.contactService.prenom = form.value.prenom;
      this.contactService.age = form.value.age;
      this.contactService.email = form.value.email;
      this.contactService.commentaire = form.value.commentaire;

      this.router.navigate(['/']);
    }
  }
}
