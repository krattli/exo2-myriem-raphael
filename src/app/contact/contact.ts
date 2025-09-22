import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ContactDataService } from '../services/contact-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'Contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})

export class Contact {

  constructor(
    private contactService: ContactDataService,
    private router: Router
  ) { }

  hideEmail : Boolean = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      if (email && !email.includes('@')) {
        alert("L'email doit contenir un @ !");
        return;
      }
      this.contactService.nom = form.value.nom;
      this.contactService.prenom = form.value.prenom;
      this.contactService.age = form.value.age;
      this.contactService.email = form.value.email;
      this.contactService.commentaire = form.value.commentaire;
      alert("Le formulaire est valide !");

      this.router.navigate(['/']);
    }
  }
}
