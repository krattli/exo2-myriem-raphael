import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactData {

  public nom: string | null = null;
  public prenom: string = "";
  public age: string = "";
  public commentaire: string = "";

}
